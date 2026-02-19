# 📸 Photo Gallery Setup Guide

## 🎯 Quick Setup

### Step 1: Add Your Photos

1. Place your wedding photos in: `public/images/gallery/`
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
3. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.

Example:
```
public/images/gallery/
├── photo1.jpg
├── photo2.jpg
├── photo3.jpg
├── photo4.jpg
└── photo5.jpg
```

### Step 2: Update the Photo List

Open `src/components/PhotoGallery.tsx` and update the `photos` array:

```typescript
const photos = [
  {
    id: 1,
    src: '/images/gallery/photo1.jpg',
    caption: 'Our First Meeting',
  },
  {
    id: 2,
    src: '/images/gallery/photo2.jpg',
    caption: 'The Proposal',
  },
  {
    id: 3,
    src: '/images/gallery/photo3.jpg',
    caption: 'Engagement Ceremony',
  },
  {
    id: 4,
    src: '/images/gallery/photo4.jpg',
    caption: 'Pre-Wedding Celebration',
  },
  {
    id: 5,
    src: '/images/gallery/photo5.jpg',
    caption: 'Mehendi Night',
  },
  // Add more photos...
]
```

### Step 3: Done!

The gallery will automatically display all photos in a beautiful carousel.

## 📝 Photo Guidelines

### Recommended Specifications:
- **Resolution**: 1920x1080 or higher
- **Aspect Ratio**: 16:9 (landscape) works best
- **File Size**: Under 2MB per image (optimize before uploading)
- **Format**: JPG (best for photos)

### Optimization Tools:
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Advanced compression
- [ImageOptim](https://imageoptim.com/) - Mac app

## 🎨 Customization

### Change Auto-Play Speed

In `PhotoGallery.tsx`, find:
```typescript
autoplay={{ delay: 4000, disableOnInteraction: false }}
```

Change `4000` to your desired milliseconds (e.g., `5000` = 5 seconds)

### Change Transition Effect

Replace `effect="fade"` with:
- `effect="slide"` - Slide transition
- `effect="cube"` - 3D cube effect
- `effect="flip"` - Flip effect
- `effect="coverflow"` - Coverflow effect

### Disable Auto-Play

Remove or comment out:
```typescript
autoplay={{ delay: 4000, disableOnInteraction: false }}
```

### Change Aspect Ratio

Find:
```typescript
aspect-video md:aspect-[21/9]
```

Change to:
- `aspect-square` - 1:1 square
- `aspect-[4/3]` - 4:3 ratio
- `aspect-[3/2]` - 3:2 ratio

## 🚀 Advanced: Dynamic Loading

If you want to automatically load ALL images from the folder without manually listing them, you'll need to:

1. Use a build-time script to scan the folder
2. Or use an API route to list files
3. Or use a CMS/database

For most use cases, manually listing photos (as shown above) is simpler and gives you control over order and captions.

## 📱 Mobile Optimization

Photos are automatically optimized for mobile:
- Responsive sizing
- Touch swipe support
- Lazy loading
- WebP format support

## 🎯 Example Setup

### 1. Add 5 Photos:
```bash
public/images/gallery/
├── photo1.jpg  (Our first date)
├── photo2.jpg  (The proposal)
├── photo3.jpg  (Engagement party)
├── photo4.jpg  (Pre-wedding shoot)
└── photo5.jpg  (Mehendi ceremony)
```

### 2. Update PhotoGallery.tsx:
```typescript
const photos = [
  { id: 1, src: '/images/gallery/photo1.jpg', caption: 'Our First Date' },
  { id: 2, src: '/images/gallery/photo2.jpg', caption: 'The Proposal' },
  { id: 3, src: '/images/gallery/photo3.jpg', caption: 'Engagement Party' },
  { id: 4, src: '/images/gallery/photo4.jpg', caption: 'Pre-Wedding Shoot' },
  { id: 5, src: '/images/gallery/photo5.jpg', caption: 'Mehendi Ceremony' },
]
```

### 3. Test:
```bash
npm run dev
```

Scroll to the gallery section and see your photos!

## 🎨 Caption Styling

Captions appear at the bottom of each photo with:
- Dark gradient overlay
- White text
- Serif font (Playfair Display)
- Centered alignment

To change caption style, edit the caption overlay div in `PhotoGallery.tsx`.

## ✨ Features

- ✅ Auto-play carousel
- ✅ Navigation arrows
- ✅ Pagination dots
- ✅ Fade transitions
- ✅ Touch swipe support
- ✅ Keyboard navigation
- ✅ Loop mode
- ✅ Responsive design
- ✅ Image captions
- ✅ Lazy loading
- ✅ Error handling

## 🐛 Troubleshooting

### Photos not showing?
1. Check file path is correct: `/images/gallery/photo1.jpg`
2. Ensure files are in `public/images/gallery/`
3. Check file names match exactly (case-sensitive)
4. Verify image format is supported

### Gallery not working?
1. Check Swiper is installed: `npm list swiper`
2. Restart dev server: `npm run dev`
3. Clear browser cache

### Images too large?
1. Optimize images before uploading
2. Use TinyPNG or Squoosh
3. Target: Under 500KB per image

---

**Your photo gallery is ready to showcase your beautiful moments!** 📸✨
