# 💑 Premium Wedding Invitation Web Application

A luxurious, animated Indian wedding invitation website with royal aesthetics, smooth scroll-based animations, and modern integrations.

## ✨ Features

- 🎨 **Royal Animated Hero Section** - Full-screen landing with animated elephants carrying bride & groom
- 🌀 **Scroll-Based Split Animation** - Hero image splits vertically on scroll using Framer Motion
- 🙏 **Namaskar Animation** - Animated couple greeting with falling petals
- 📅 **Event Details** - Glassmorphism cards with countdown timer
- 📍 **Google Maps Integration** - Interactive map with directions
- 📆 **Google Calendar Integration** - One-click event addition
- 💌 **RSVP System** - Form with confetti animation on submission
- 🖼️ **Photo Gallery** - Elegant carousel with auto-play
- 🎵 **Background Music** - Optional with mute/unmute toggle
- 🔗 **Personalized Invitations** - URL parameter support for guest names
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - Fast loading, lazy loading, SEO ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this project

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Create environment file:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Configure your environment variables in \`.env\`:
\`\`\`env
# Google Maps API Key (Get from: https://console.cloud.google.com/)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

# Wedding Details
NEXT_PUBLIC_GROOM_NAME=Raj Kumar
NEXT_PUBLIC_BRIDE_NAME=Priya Sharma
NEXT_PUBLIC_WEDDING_DATE=2026-12-15
NEXT_PUBLIC_WEDDING_TIME=18:00
NEXT_PUBLIC_VENUE_NAME=Grand Palace Hotel
NEXT_PUBLIC_VENUE_ADDRESS=123 Royal Street, Mumbai, Maharashtra 400001
NEXT_PUBLIC_VENUE_LAT=19.0760
NEXT_PUBLIC_VENUE_LNG=72.8777
\`\`\`

5. Run development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Colors

Edit \`tailwind.config.ts\` to customize the color palette:

\`\`\`typescript
colors: {
  royal: {
    gold: '#D4AF37',
    maroon: '#800020',
    cream: '#FFF5E1',
    pink: '#F8C8DC',
    peach: '#FFDAB9',
  },
}
\`\`\`

### Photos

Replace placeholder images in \`src/components/PhotoGallery.tsx\`:

\`\`\`typescript
const photos = [
  {
    id: 1,
    src: '/images/photo1.jpg', // Add your images to public/images/
    caption: 'Our First Meeting',
  },
  // Add more photos...
]
\`\`\`

### Personalized Invitations

Share links with guest names:
\`\`\`
https://yourwebsite.com/?guest=Mahesh
https://yourwebsite.com/?guest=Priya
\`\`\`

The invitation will display: "Dear Mahesh, You are warmly invited."

## 🔧 Backend Integration

### Firebase Setup (Recommended)

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)

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

4. Update \`src/app/api/rsvp/route.ts\` to use Firebase (see comments in file)

### Alternative: Supabase

1. Create project at [https://supabase.com/](https://supabase.com/)
2. Install: \`npm install @supabase/supabase-js\`
3. Follow Supabase documentation for setup

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Visit [https://vercel.com/](https://vercel.com/)

3. Import your repository

4. Add environment variables in Vercel dashboard

5. Deploy!

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Performance Optimization

- Images are lazy-loaded
- Animations are GPU-accelerated
- Code splitting enabled
- Fonts optimized with next/font
- Target Lighthouse score: 90+

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Carousel**: Swiper
- **Icons**: React Icons
- **Confetti**: canvas-confetti

## 📄 Project Structure

\`\`\`
├── src/
│   ├── app/
│   │   ├── api/rsvp/          # RSVP API endpoint
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main page
│   └── components/
│       ├── HeroSection.tsx    # Animated hero with split effect
│       ├── InvitationSection.tsx  # Namaskar animation
│       ├── EventDetails.tsx   # Event info & countdown
│       ├── MapSection.tsx     # Google Maps
│       ├── CalendarButton.tsx # Google Calendar
│       ├── PhotoGallery.tsx   # Photo carousel
│       ├── RSVPSection.tsx    # RSVP form
│       └── Footer.tsx         # Footer with share
├── public/                    # Static assets
├── .env.example              # Environment template
└── README.md                 # This file
\`\`\`

## 🎨 Design Guidelines

- **Color Palette**: Royal Gold, Deep Maroon, Soft Cream, Blush Pink
- **Typography**: Playfair Display (headings), Poppins (body)
- **Style**: Minimal luxury with high white space
- **Animations**: Smooth, 60fps, emotionally engaging
- **Mobile**: Touch-friendly, optimized animations

## 🐛 Troubleshooting

### Google Maps not showing
- Ensure you have a valid API key
- Enable Maps JavaScript API in Google Cloud Console
- Check browser console for errors

### Animations laggy on mobile
- Reduce particle count in HeroSection
- Disable auto-play in PhotoGallery
- Use \`will-change\` CSS property sparingly

### Build errors
- Clear \`.next\` folder: \`rm -rf .next\`
- Delete \`node_modules\` and reinstall
- Check Node.js version (18+ required)

## 📞 Support

For issues or questions:
1. Check this README
2. Review component comments
3. Check Next.js documentation
4. Review Framer Motion docs

## 📝 License

This project is for personal use. Customize as needed for your wedding!

## 💝 Credits

Built with love for celebrating special moments.

---

**Made with ❤️ for your special day**
