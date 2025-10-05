# Installation Guide for Next.js Project

## The Error You're Seeing

```
Could not resolve "./horizontalTileCard" from "src/components/molecules/horizontalTileCard/index.tsx"
```

This error happens when your Next.js project has an **old/cached version** of the design system.

---

## ✅ Solution: Reinstall the Package

### Step 1: Navigate to Your Next.js Project
```bash
cd /path/to/your-nextjs-project
```

### Step 2: Complete Clean Installation
```bash
# Remove the old package
npm uninstall spotify-design-system

# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall with the updated local package
npm install /Users/languyen/Personal/spotify_design_system

# Reinstall all dependencies
npm install
```

### Step 3: Clear Next.js Cache
```bash
# Remove Next.js build cache
rm -rf .next

# Restart dev server
npm run dev
```

---

## 🔍 Why This Happened

1. **We fixed the import path** in the design system earlier
2. **Your Next.js project** still has the old version with the broken import
3. **npm doesn't auto-update** local packages - you need to manually reinstall

---

## ✅ Verify Installation

After reinstalling, you should see:

```bash
✓ Compiled successfully
```

And your images in the Card component should:
- ✅ Render immediately
- ✅ Stay visible (no opacity flash)
- ✅ Work with cached images

---

## 📦 Alternative: Publish to npm

If you want to avoid local installation issues, you can publish to npm:

```bash
# In the design system directory
cd /Users/languyen/Personal/spotify_design_system

# Update version
npm version patch

# Publish
npm publish

# Then in your Next.js project:
npm install spotify-design-system@latest
```

---

## 🆘 Still Having Issues?

### Check Package Installation
```bash
# In your Next.js project
npm list spotify-design-system
```

Should show:
```
spotify-design-system@1.0.4
```

### Check if Files Exist
```bash
# In your Next.js project
ls -la node_modules/spotify-design-system/dist/components/molecules/horizontalTileCard/
```

Should show:
```
horizontalTileCard.js
horizontalTileCard.d.ts
index.js
index.d.ts
```

---

## 🎯 Quick Fix Command (Copy-Paste)

```bash
cd /path/to/your-nextjs-project && \
npm uninstall spotify-design-system && \
rm -rf node_modules package-lock.json .next && \
npm install /Users/languyen/Personal/spotify_design_system && \
npm install && \
npm run dev
```

Replace `/path/to/your-nextjs-project` with your actual project path.


