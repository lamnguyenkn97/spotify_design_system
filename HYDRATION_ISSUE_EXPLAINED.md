# Root Cause Analysis: Image Hydration Flash

## The Core Problem

**You cannot reliably track browser image loading events during React hydration in Next.js SSR.**

## Why Loading State Tracking Fails in SSR

### The Timing Problem

```
SERVER (renders HTML)
  ↓
  useState(false) → isLoading = false
  ↓
  <img /> rendered with opacity: 1
  ↓
  HTML sent to browser
  ↓
BROWSER (shows HTML)
  ↓
  User sees image ✅
  ↓
REACT HYDRATION (client-side)
  ↓
  React attaches event handlers
  ↓
  Browser sees <img> element
  ↓
  ⚡ onLoadStart fires immediately
  ↓
  setIsLoading(true) 
  ↓
  React re-renders
  ↓
  opacity: 0 applied ❌ (IMAGE DISAPPEARS)
  ↓
  ⏰ Wait for onLoad...
  ↓
  onLoad might fire (or might not if cached)
  ↓
  setIsLoading(false)
  ↓
  opacity: 1 applied ✅ (IMAGE REAPPEARS)
```

**Result:** Visible → Invisible → Visible = **FLASH**

---

## Why Browser Events Are Unreliable During Hydration

### 1. Event Order is Non-Deterministic

Browser image loading events have **unpredictable timing**:

```typescript
// Fast network or cached image:
onLoadStart() → onLoad() → React state update
// React might batch these, causing state confusion

// Slow network:
onLoadStart() → ... 500ms delay ... → onLoad()
// User sees the flash clearly

// Already cached:
onLoadStart() → [onLoad might not fire]
// Image stays hidden forever!
```

### 2. React State Updates During Hydration Are Dangerous

```typescript
// During hydration, this causes problems:
useEffect(() => {
  setIsLoading(true);  // ❌ BAD: Changes state during hydration
}, [src]);

// Why? React expects hydration to match server HTML:
// Server HTML: isLoading = false
// Client expects: isLoading = false
// Changing it causes hydration mismatch
```

### 3. Cached Images Break the Loading Flow

```typescript
// For cached images:
const img = new Image();
img.src = "cached-image.jpg";

// Browser says: "I already have this!"
// onLoadStart: ✅ Fires (attaching listener triggers it)
// onLoad: ❌ Might NOT fire (browser considers it loaded)

// Result: Image stuck at opacity: 0
```

---

## The Original Broken Code

```typescript
// ❌ BAD IMPLEMENTATION
export const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, ... }) => {
  // Problem 1: Started with loading state based on src
  const [isLoading, setIsLoading] = useState(!!src);  
  //                                          ^^^^^^^ 
  // Server: true, Client after hydration: might change

  useEffect(() => {
    if (src) {
      setIsLoading(true);  // Problem 2: Forces loading state during hydration
    }
  }, [src]);

  const handleLoadStart = () => {
    setIsLoading(true);  // Problem 3: Changes state when event fires
  };

  return (
    <StyledImage
      src={src}
      isLoading={isLoading}  // Problem 4: Controls visibility
      onLoadStart={handleLoadStart}  // Problem 5: Unreliable event
      onLoad={() => setIsLoading(false)}
    />
  );
});

// StyledImage component:
const StyledImage = styled.img<{ isLoading: boolean }>`
  ${({ isLoading }) => isLoading && css`
    opacity: 0;        // Problem 6: Hides image while "loading"
    position: absolute;
  `};
`;
```

### Why Each Part Was Problematic:

1. **`useState(!!src)`** - Initial state depends on props, causes hydration mismatches
2. **`useEffect` setting loading** - Runs after render, causes flash
3. **`handleLoadStart`** - Fires immediately during hydration for all images
4. **`isLoading` controls visibility** - Makes image invisible during state updates
5. **`onLoadStart` event** - Unreliable timing, especially with cached images
6. **`opacity: 0` style** - User sees the flash as image appears/disappears

---

## The Fix: Don't Track Loading State During Hydration

```typescript
// ✅ GOOD IMPLEMENTATION
export const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, ... }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(false);  // Always false
  const [showPlaceholder, setShowPlaceholder] = useState(!src);

  useEffect(() => {
    if (src) {
      setImageSrc(src);
      setShowPlaceholder(false);
      // ✅ Don't touch loading state - prevents hydration issues
    }
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // ✅ Verify image actually loaded
    const target = e.currentTarget;
    if (target.complete && target.naturalHeight !== 0) {
      setIsLoading(false);
    }
  };

  return (
    <StyledImage
      src={imageSrc}
      isLoading={false}  // ✅ Always visible - no flash
      onLoad={handleLoad}  // ✅ Only onLoad, no onLoadStart
      onError={handleError}
    />
  );
});
```

### Why This Works:

1. **Always render visible** - No opacity changes during hydration
2. **No `onLoadStart`** - Eliminates the event that caused the flash
3. **`isLoading` always false** - Image never gets hidden
4. **Smart `onLoad`** - Checks if image actually loaded (handles cached images)
5. **No state changes in useEffect** - Prevents hydration mismatches
6. **Placeholder only for missing images** - Error handling still works

---

## Key Takeaways

### The Fundamental Issue
**Browser events (onLoadStart, onLoad) fire at unpredictable times during React hydration, causing state updates that make images flash.**

### Why SSR Makes It Worse
1. Server renders HTML with visible images
2. Client hydration triggers browser events
3. Events cause React state updates
4. State updates change styles (opacity)
5. User sees the flash

### The Solution Philosophy
**Don't try to track loading state during hydration. Trust that images will load, and only handle errors.**

### When Loading States ARE Appropriate
- **User-triggered loads** (clicking "Load More")
- **Dynamic image changes** (user uploads new image)
- **Explicit loading indicators** (skeleton screens before any content)

### When Loading States FAIL
- **SSR/Hydration** (this case!)
- **Cached images** (events don't fire reliably)
- **Fast networks** (events fire too quickly to track)

---

## Additional Context: Why This Affects Next.js Specifically

### Next.js SSR Flow
```
1. Server renders full HTML with images
2. Browser downloads and displays HTML immediately
3. Next.js JavaScript loads
4. React hydrates (attaches event handlers)
5. ⚡ Image load events start firing during hydration
6. 💥 State updates during hydration = flash
```

### Client-Only React Apps (Create React App, Vite)
```
1. Browser downloads JavaScript
2. React renders (no HTML yet)
3. Images load with event handlers already attached
4. Events fire in predictable order
5. ✅ Less likely to have timing issues
```

### The SSR Dilemma
- **SSR Goal:** Fast initial display (send HTML immediately)
- **React Hydration:** Match server HTML exactly
- **Browser Events:** Fire during the gap between HTML display and hydration
- **Result:** State updates during a critical timing window = visual bugs

---

## Broader Lesson

This issue represents a **fundamental challenge in SSR frameworks**:

> **How do you handle browser events that fire during the gap between server HTML rendering and client-side hydration?**

The answer for images: **Don't try to track transient states during hydration. Render optimistically and handle only errors.**


