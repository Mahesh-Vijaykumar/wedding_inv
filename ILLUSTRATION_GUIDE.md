# 🎨 Custom Illustration Guide

## Step 1: Choose Your Method

### Method A: AI Image Generation (Fastest - 5 minutes)

#### Using Midjourney (Recommended - Best Quality)
1. Go to [Midjourney](https://www.midjourney.com/)
2. Join their Discord server
3. Use this prompt in any channel:

```
/imagine Two majestic royal Indian wedding elephants facing each other in symmetrical composition, left elephant decorated in pink and gold carrying beautiful bride in traditional red lehenga and jewelry, right elephant decorated in cream and gold carrying handsome groom in cream sherwani, intricate gold ornaments and decorations on elephants, soft pastel warm color palette, Ghibli-inspired illustration style, Studio Ghibli aesthetic, soft magical lighting, gentle glow, dreamy atmosphere, ultra detailed, cinematic, isolated characters only, no background, transparent background, 4K resolution, symmetrical framing, elegant and romantic --ar 16:9 --style expressive --v 6 --quality 2
```

4. Wait 60 seconds for generation
5. Click "U1" or "U2" to upscale your favorite
6. Download the image
7. Use a tool like [Remove.bg](https://www.remove.bg/) to remove background
8. Save as `elephants-hero.png`

#### Using DALL-E 3 (via ChatGPT Plus)
1. Go to [ChatGPT](https://chat.openai.com/)
2. Use this prompt:

```
Create a high-resolution digital illustration of two royal Indian wedding elephants facing each other in perfect symmetry. The left elephant should be decorated in pink and gold ornaments, carrying a beautiful bride wearing traditional red bridal attire (red lehenga) with gold jewelry. The right elephant should be decorated in cream and gold ornaments, carrying a handsome groom wearing cream sherwani. Style: Ghibli-inspired, soft pastel colors, magical soft lighting, gentle glow, dreamy atmosphere, ultra detailed, cinematic composition. Show only the characters with no background scene. 4K quality, symmetrical framing.
```

3. Download the generated image
4. Remove background using [Remove.bg](https://www.remove.bg/)
5. Save as `elephants-hero.png`

#### Using Leonardo.ai (Free Alternative)
1. Go to [Leonardo.ai](https://leonardo.ai/)
2. Create free account (150 credits/day)
3. Select "Image Generation"
4. Use this prompt:

```
Two royal Indian wedding elephants facing each other, left elephant with bride in red lehenga, right elephant with groom in cream sherwani, gold ornaments, Ghibli style, soft pastel colors, magical glow, symmetrical, no background, ultra detailed, 4K
```

5. Settings: 
   - Model: Leonardo Diffusion XL
   - Resolution: 1024x1024 or higher
   - Quality: High
6. Generate and download
7. Remove background if needed

---

### Method B: Hire a Professional Illustrator (Best Quality - 2-7 days)

#### Fiverr (Recommended - Affordable)
1. Go to [Fiverr](https://www.fiverr.com/)
2. Search: "Indian wedding illustration" or "Ghibli style illustration"
3. Filter by:
   - Budget: $50-$200 (depending on quality)
   - Delivery time: 3-7 days
   - Seller level: Level 2 or Top Rated
4. Look for sellers with:
   - Portfolio showing similar style
   - Good reviews (4.9+ stars)
   - Experience with Indian themes

**Recommended search terms:**
- "Indian wedding digital illustration"
- "Ghibli style character illustration"
- "Royal elephant illustration"

**Brief to send seller:**
```
Project: Royal Indian Wedding Elephant Illustration

Requirements:
- Two royal elephants facing each other (symmetrical)
- Left: Bride in red traditional bridal attire on decorated elephant
- Right: Groom in cream sherwani on decorated elephant
- Style: Ghibli-inspired, soft and dreamy
- Colors: Warm pastels, gold ornaments
- Lighting: Soft, magical glow
- Background: Transparent (PNG)
- Resolution: 4K (3840x2160px minimum)
- Format: PNG with transparency
- Composition: Symmetrical, cinematic

Reference style: Studio Ghibli films (Spirited Away, Howl's Moving Castle)
Mood: Romantic, elegant, magical

Deliverables:
1. High-res PNG with transparent background (4K)
2. Source file (PSD/AI if possible)
3. 2-3 revision rounds included
```

#### Upwork (Professional Quality)
1. Go to [Upwork](https://www.upwork.com/)
2. Post a job or search for illustrators
3. Budget: $100-$500
4. Timeline: 5-10 days
5. Use the same brief as above

#### 99designs (Design Contest)
1. Go to [99designs](https://99designs.com/)
2. Start an illustration contest
3. Budget: $299-$799
4. Get multiple designs to choose from
5. Timeline: 7 days

---

### Method C: Find on Stock Sites (Fastest - Immediate)

#### Premium Stock Sites
1. **Shutterstock**: Search "Indian wedding elephant illustration"
2. **Adobe Stock**: Search "royal elephant wedding"
3. **iStock**: Search "Indian wedding illustration"
4. **Creative Market**: Search "wedding elephant illustration"

**Note:** You may need to combine/edit multiple images or commission custom work if exact match not found.

---

## Step 2: Prepare Your Image

Once you have your illustration:

### Image Specifications
- **Format**: PNG with transparent background
- **Resolution**: Minimum 3840x2160px (4K)
- **File size**: Under 5MB (optimize if needed)
- **Color mode**: RGB
- **Bit depth**: 8-bit or 16-bit

### Optimize Your Image
1. Use [TinyPNG](https://tinypng.com/) to compress without quality loss
2. Ensure transparency is preserved
3. Check that image is centered and symmetrical

---

## Step 3: Add to Project

1. Save your final image as: `elephants-hero.png`
2. Place it in: `public/images/hero/elephants-hero.png`
3. The code is already set up to use this image!

---

## Step 4: Verify Integration

After adding the image, run:
```bash
npm run dev
```

Open http://localhost:3000 and check:
- ✅ Image loads correctly
- ✅ Transparent background works
- ✅ Image is centered
- ✅ Quality is sharp on all devices
- ✅ File size is optimized

---

## Recommended Specifications for Designer

If hiring a designer, share these exact specs:

```
Canvas Size: 3840 x 2160 pixels (16:9 ratio)
DPI: 300
Color Mode: RGB
Format: PNG-24 with alpha channel (transparency)

Composition:
- Center: 1920px (vertical dividing line)
- Left elephant: Positioned at 960px from left
- Right elephant: Positioned at 960px from right
- Characters should be 70% of canvas height
- Leave 15% padding on all sides

Colors:
- Bride attire: #DC143C (Crimson red)
- Groom attire: #FFF5E1 (Cream)
- Gold ornaments: #D4AF37 (Royal gold)
- Elephant left: Soft pink tones (#F8C8DC)
- Elephant right: Soft cream tones (#FFF5E1)

Style Reference:
- Studio Ghibli films (Spirited Away, Howl's Moving Castle)
- Soft edges, dreamy atmosphere
- Gentle lighting with subtle glow
- Detailed but not overwhelming
- Romantic and elegant mood
```

---

## Budget Guide

| Method | Cost | Time | Quality |
|--------|------|------|---------|
| AI Generation | $10-30/month | 5 min | Good |
| Fiverr Basic | $50-100 | 3-5 days | Good |
| Fiverr Premium | $150-300 | 5-7 days | Excellent |
| Upwork | $200-500 | 7-14 days | Excellent |
| 99designs Contest | $299-799 | 7 days | Multiple options |

---

## Quick Start Recommendation

**For immediate results:**
1. Use Midjourney or DALL-E 3 (5 minutes)
2. Remove background with Remove.bg
3. Optimize with TinyPNG
4. Place in `public/images/hero/`

**For best quality:**
1. Hire on Fiverr ($100-200 range)
2. Use the detailed brief above
3. Request 2-3 revisions
4. Get source files

---

## Need Help?

If you get stuck:
1. Check that filename is exactly: `elephants-hero.png`
2. Verify file is in: `public/images/hero/`
3. Ensure PNG has transparent background
4. Restart dev server: `npm run dev`

---

## Alternative: Temporary Placeholder

While waiting for your custom illustration, the hero section will display beautifully with just the typography. The illustration will enhance it when ready!

---

**Next Step:** Once you have your illustration file, let me know and I'll help integrate it into the hero section with proper sizing, positioning, and effects!
