# ⚡ Quick Start Guide

Get your wedding invitation running in 5 minutes!

## 🚀 Installation (2 minutes)

\`\`\`bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env

# 3. Start development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) 🎉

## ⚙️ Essential Configuration

### Edit \`.env\` file:

\`\`\`env
# Your wedding details
NEXT_PUBLIC_GROOM_NAME=Your Name
NEXT_PUBLIC_BRIDE_NAME=Partner Name
NEXT_PUBLIC_WEDDING_DATE=2026-12-15
NEXT_PUBLIC_WEDDING_TIME=18:00
NEXT_PUBLIC_VENUE_NAME=Your Venue
NEXT_PUBLIC_VENUE_ADDRESS=Full Address
NEXT_PUBLIC_VENUE_LAT=19.0760
NEXT_PUBLIC_VENUE_LNG=72.8777

# Google Maps (get from: https://console.cloud.google.com/)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
\`\`\`

## 🎨 Customization Checklist

- [ ] Update wedding details in \`.env\`
- [ ] Get Google Maps API key
- [ ] Add your photos to \`public/images/\`
- [ ] Update photo paths in \`src/components/PhotoGallery.tsx\`
- [ ] Customize colors in \`tailwind.config.ts\` (optional)
- [ ] Setup Firebase/Supabase for RSVP storage (optional)

## 📸 Adding Photos

1. Create folder: \`public/images/\`
2. Add photos: \`photo1.jpg\`, \`photo2.jpg\`, etc.
3. Edit \`src/components/PhotoGallery.tsx\`:

\`\`\`typescript
const photos = [
  { id: 1, src: '/images/photo1.jpg', caption: 'Our First Meeting' },
  { id: 2, src: '/images/photo2.jpg', caption: 'The Proposal' },
  // Add more...
]
\`\`\`

## 🚀 Deploy to Vercel (3 minutes)

\`\`\`bash
# 1. Push to GitHub
git init
git add .
git commit -m "Wedding invitation"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main

# 2. Go to vercel.com
# 3. Import your GitHub repo
# 4. Add environment variables
# 5. Deploy!
\`\`\`

## 🔗 Share Personalized Links

\`\`\`
https://yoursite.com/?guest=Mahesh
https://yoursite.com/?guest=Priya
\`\`\`

## 📱 Features Overview

✅ Animated hero with elephants  
✅ Scroll-based split animation  
✅ Namaskar greeting animation  
✅ Countdown timer  
✅ Google Maps integration  
✅ Add to Calendar button  
✅ Photo gallery carousel  
✅ RSVP form with confetti  
✅ WhatsApp share  
✅ Fully responsive  
✅ Personalized invitations  

## 🎯 Key Files

| File | Purpose |
|------|---------|
| \`.env\` | Wedding details & API keys |
| \`src/app/page.tsx\` | Main page |
| \`src/components/HeroSection.tsx\` | Animated hero |
| \`src/components/RSVPSection.tsx\` | RSVP form |
| \`tailwind.config.ts\` | Color customization |
| \`README.md\` | Full documentation |
| \`SETUP_GUIDE.md\` | Detailed setup |

## 🆘 Quick Troubleshooting

**Maps not showing?**
- Get API key from Google Cloud Console
- Enable Maps JavaScript API

**Build errors?**
\`\`\`bash
rm -rf .next node_modules
npm install
\`\`\`

**Animations laggy?**
- Test on different device
- Reduce particle count in HeroSection

## 📚 Next Steps

1. ✅ Get it running locally
2. ✅ Customize wedding details
3. ✅ Add your photos
4. ✅ Setup RSVP backend (Firebase/Supabase)
5. ✅ Deploy to Vercel
6. ✅ Share with guests!

---

**Need more help?** Check \`SETUP_GUIDE.md\` for detailed instructions.

**Ready to deploy?** See \`README.md\` for full documentation.

🎉 **Congratulations on your wedding!** 💑
