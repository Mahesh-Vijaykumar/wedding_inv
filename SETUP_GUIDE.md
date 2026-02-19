# 🎯 Complete Setup Guide

## Step-by-Step Installation

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

This will install:
- Next.js 14 (React framework)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Swiper (carousel)
- React Icons (icons)
- Canvas Confetti (celebration effects)

### 2. Configure Environment Variables

Create a \`.env\` file in the root directory:

\`\`\`bash
cp .env.example .env
\`\`\`

Edit \`.env\` with your details:

\`\`\`env
# REQUIRED: Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...

# Wedding Information
NEXT_PUBLIC_GROOM_NAME=Raj Kumar
NEXT_PUBLIC_BRIDE_NAME=Priya Sharma
NEXT_PUBLIC_WEDDING_DATE=2026-12-15
NEXT_PUBLIC_WEDDING_TIME=18:00
NEXT_PUBLIC_VENUE_NAME=Grand Palace Hotel
NEXT_PUBLIC_VENUE_ADDRESS=123 Royal Street, Mumbai, Maharashtra 400001
NEXT_PUBLIC_VENUE_LAT=19.0760
NEXT_PUBLIC_VENUE_LNG=72.8777
\`\`\`

### 3. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable these APIs:
   - Maps JavaScript API
   - Maps Embed API
4. Create credentials → API Key
5. Copy the API key to your \`.env\` file

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

### 5. Customize Your Wedding

#### Update Wedding Details
Edit \`.env\` file with your information

#### Add Photos
1. Create \`public/images\` folder
2. Add your photos: \`photo1.jpg\`, \`photo2.jpg\`, etc.
3. Update \`src/components/PhotoGallery.tsx\`:

\`\`\`typescript
const photos = [
  {
    id: 1,
    src: '/images/photo1.jpg',
    caption: 'Our First Meeting',
  },
  // Add more...
]
\`\`\`

4. Uncomment the Image component in PhotoGallery.tsx

#### Customize Colors
Edit \`tailwind.config.ts\`:

\`\`\`typescript
colors: {
  royal: {
    gold: '#D4AF37',      // Change to your color
    maroon: '#800020',    // Change to your color
    cream: '#FFF5E1',     // Change to your color
    pink: '#F8C8DC',      // Change to your color
    peach: '#FFDAB9',     // Change to your color
  },
}
\`\`\`

### 6. Setup Backend (RSVP Storage)

#### Option A: Firebase (Recommended)

1. Create project at [Firebase Console](https://console.firebase.google.com/)

2. Install Firebase:
\`\`\`bash
npm install firebase
\`\`\`

3. Create \`src/lib/firebase.ts\`:
\`\`\`typescript
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
\`\`\`

4. Update \`src/app/api/rsvp/route.ts\`:
\`\`\`typescript
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Inside POST function:
await addDoc(collection(db, 'rsvps'), {
  ...body,
  timestamp: serverTimestamp()
})
\`\`\`

5. Add Firebase config to \`.env\`:
\`\`\`env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
\`\`\`

#### Option B: Supabase

1. Create project at [Supabase](https://supabase.com/)
2. Install: \`npm install @supabase/supabase-js\`
3. Create table \`rsvps\` with columns: name, phone, guests, attending, message, created_at
4. Follow Supabase docs for integration

### 7. Deploy to Production

#### Deploy to Vercel (Easiest)

1. Push code to GitHub:
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
\`\`\`

2. Go to [Vercel](https://vercel.com/)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables in Vercel dashboard
6. Click "Deploy"

Your site will be live at: \`https://your-project.vercel.app\`

#### Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### 8. Share Personalized Invitations

Create unique links for each guest:

\`\`\`
https://yourwebsite.com/?guest=Mahesh
https://yourwebsite.com/?guest=Priya
https://yourwebsite.com/?guest=Amit
\`\`\`

Each guest will see: "Dear [Name], You are warmly invited."

### 9. Testing Checklist

- [ ] Hero animation works smoothly
- [ ] Scroll split animation triggers correctly
- [ ] Countdown timer displays correctly
- [ ] Google Maps loads and shows correct location
- [ ] "Add to Calendar" button works
- [ ] Photo gallery carousel works
- [ ] RSVP form submits successfully
- [ ] Confetti animation plays on RSVP submit
- [ ] WhatsApp share button works
- [ ] Mobile responsive on all screen sizes
- [ ] All personalized guest links work

### 10. Performance Optimization

Before deploying:

1. Optimize images:
\`\`\`bash
# Use tools like:
# - TinyPNG (https://tinypng.com/)
# - ImageOptim
# - Squoosh (https://squoosh.app/)
\`\`\`

2. Test performance:
\`\`\`bash
npm run build
npm start
\`\`\`

3. Check Lighthouse score:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit
   - Target: 90+ score

### 11. Common Issues & Solutions

#### Maps not loading
- Check API key is correct
- Enable Maps JavaScript API in Google Cloud
- Check browser console for errors
- Verify lat/lng coordinates

#### Animations laggy
- Reduce particle count in HeroSection
- Disable auto-play on mobile
- Check device performance

#### Build fails
\`\`\`bash
rm -rf .next node_modules
npm install
npm run build
\`\`\`

#### Environment variables not working
- Restart dev server after changing .env
- Ensure variables start with NEXT_PUBLIC_
- Check for typos in variable names

### 12. Optional Enhancements

#### Add Background Music
1. Add audio file to \`public/music/wedding-music.mp3\`
2. Update HeroSection.tsx:
\`\`\`typescript
useEffect(() => {
  audioRef.current = new Audio('/music/wedding-music.mp3')
  audioRef.current.loop = true
  audioRef.current.muted = true
  audioRef.current.play()
}, [])
\`\`\`

#### Add QR Code
\`\`\`bash
npm install qrcode.react
\`\`\`

Add to Footer:
\`\`\`typescript
import QRCode from 'qrcode.react'

<QRCode value={window.location.href} size={128} />
\`\`\`

#### Email Notifications
Use services like:
- SendGrid
- Mailgun
- AWS SES
- Resend

### 13. Maintenance

#### View RSVP Responses

If using Firebase:
1. Go to Firebase Console
2. Navigate to Firestore Database
3. View \`rsvps\` collection

#### Update Wedding Details

Edit \`.env\` file and redeploy

#### Analytics

Add Google Analytics:
1. Create GA4 property
2. Install: \`npm install @next/third-parties\`
3. Add to layout.tsx

---

## 🎉 You're Ready!

Your premium wedding invitation is now live. Share the link with your guests and celebrate! 💑

For support, refer to README.md or component documentation.
