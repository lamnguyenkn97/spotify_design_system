# Next.js Image Rendering Fix

## Problem
Images in the Card component were not rendering when the design system was integrated into Next.js projects.

## Root Cause
The Image atom component had a loading state management issue that caused problems with Next.js SSR (Server-Side Rendering):

1. **Initial Loading State**: Images started with `isLoading: true` by default when a `src` was provided
2. **Hidden Images**: While `isLoading: true`, the image had `opacity: 0` and `position: absolute` styles applied
3. **SSR Hydration Issue**: In Next.js SSR environment, the `onLoad` event sometimes wouldn't fire properly, causing images to remain invisible indefinitely

## The Fix
Changed the Image component's loading state behavior:

### Before:
```typescript
const [isLoading, setIsLoading] = useState(!!src); // Started as true if src exists
// Image was hidden (opacity: 0) until onLoad event fired
```

### After:
```typescript
const [isLoading, setIsLoading] = useState(false); // Starts as false
const [hasStartedLoading, setHasStartedLoading] = useState(false);

// Image is visible by default
// Loading state only activates when onLoadStart fires
// This prevents SSR hydration mismatches
```

## Changes Made

### File: `src/components/atoms/Image/Image.tsx`
- Changed initial `isLoading` state from `!!src` to `false`
- Added `hasStartedLoading` state to track loading lifecycle
- Added `onLoadStart` handler to properly detect when loading begins
- Images are now visible by default and only show loading state during actual loading

### File: `src/components/molecules/horizontalTileCard/index.tsx`
- Fixed incorrect `.tsx` extension in import path

## Benefits
1. ✅ **SSR Compatible**: Works seamlessly with Next.js Server-Side Rendering
2. ✅ **No Hydration Mismatches**: Client and server states match
3. ✅ **Better UX**: Images appear immediately instead of requiring load event
4. ✅ **Graceful Fallbacks**: Still handles loading errors and shows placeholders when needed

## Testing in Your Next.js Project

After updating to this version:

1. **Reinstall the package** in your Next.js project:
   ```bash
   npm install spotify-design-system@latest
   # or if linking locally:
   npm uninstall spotify-design-system
   npm install /path/to/spotify_design_system
   ```

2. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Test image rendering**:
   ```tsx
   <Card
     title="Track Name"
     subtitle="Artist Name"
     imageUrl="https://i.scdn.co/image/..."
     onPlayClick={() => console.log('Play')}
   />
   ```

## Additional Notes

- Images still support lazy loading via the `lazy` prop
- Error handling and fallback images still work as expected
- The fix maintains backward compatibility with existing implementations
- All existing tests pass

## Version
Fixed in version: 1.0.4+

## Related Components
- `Image` atom (`src/components/atoms/Image/`)
- `Card` molecule (`src/components/molecules/Card/`)
- `Banner` molecule (`src/components/molecules/Banner/`)
- `HorizontalTileCard` molecule (`src/components/molecules/horizontalTileCard/`)


