# 📁 Project Structure

```
premium-wedding-invitation/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies & scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── tailwind.config.ts        # Tailwind CSS & color palette
│   ├── postcss.config.js         # PostCSS configuration
│   ├── next.config.js            # Next.js configuration
│   ├── .eslintrc.json            # ESLint rules
│   ├── .gitignore                # Git ignore rules
│   ├── .env.example              # Environment template
│   └── .env                      # Your environment variables (create this)
│
├── 📚 Documentation
│   ├── README.md                 # Full documentation
│   ├── QUICK_START.md            # 5-minute setup guide
│   ├── SETUP_GUIDE.md            # Detailed setup instructions
│   └── PROJECT_STRUCTURE.md      # This file
│
├── 📂 src/
│   │
│   ├── 📂 app/                   # Next.js App Router
│   │   ├── layout.tsx            # Root layout (fonts, metadata)
│   │   ├── page.tsx              # Main page (assembles all components)
│   │   ├── globals.css           # Global styles & animations
│   │   ├── swiper.css            # Carousel styling
│   │   │
│   │   └── 📂 api/               # API Routes
│   │       └── 📂 rsvp/
│   │           └── route.ts      # RSVP submission endpoint
│   │
│   └── 📂 components/            # React Components
│       ├── HeroSection.tsx       # 🎨 Animated hero with elephants
│       ├── InvitationSection.tsx # 🙏 Namaskar animation
│       ├── EventDetails.tsx      # 📅 Event info & countdown
│       ├── MapSection.tsx        # 📍 Google Maps integration
│       ├── CalendarButton.tsx    # 📆 Add to Calendar
│       ├── PhotoGallery.tsx      # 🖼️ Photo carousel
│       ├── RSVPSection.tsx       # 💌 RSVP form
│       └── Footer.tsx            # 🔗 Footer with share
│
└── 📂 public/                    # Static Assets
    ├── .gitkeep                  # Ensures folder is tracked
    ├── 📂 images/                # Your wedding photos (create this)
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   └── ...
    └── 📂 music/                 # Background music (optional)
        └── wedding-music.mp3
```

## 🎯 Component Breakdown

### HeroSection.tsx
- Full-screen animated landing
- Floating particles/petals
- Animated elephants with bride & groom
- Scroll-based split animation
- Music toggle button
- **Key Tech**: Framer Motion, useScroll, useTransform

### InvitationSection.tsx
- Animated couple with Namaskar gesture
- Falling flower petals
- Personalized greeting (if guest param)
- Mandala background pattern
- **Key Tech**: Framer Motion, SVG animations

### EventDetails.tsx
- Live countdown timer
- Glassmorphism info cards
- Date, time, venue details
- Dress code section
- **Key Tech**: useState, useEffect, Date calculations

### MapSection.tsx
- Embedded Google Maps
- "Open in Maps" button
- "Get Directions" button
- Responsive iframe
- **Key Tech**: Google Maps Embed API

### CalendarButton.tsx
- Pre-filled Google Calendar event
- One-click add to calendar
- Includes all event details
- **Key Tech**: Google Calendar URL API

### PhotoGallery.tsx
- Swipeable carousel
- Auto-play with manual controls
- Navigation arrows
- Pagination dots
- **Key Tech**: Swiper.js, React

### RSVPSection.tsx
- Form validation
- Loading states
- Confetti animation on submit
- API integration ready
- **Key Tech**: canvas-confetti, fetch API

### Footer.tsx
- WhatsApp share button
- Fireworks animation
- Credits & copyright
- Floating lotus
- **Key Tech**: Framer Motion, React Icons

## 🎨 Styling Architecture

### Global Styles (globals.css)
- CSS custom properties for colors
- Base animations (float, fade-in, slide-up)
- Utility classes (text-gradient, glass-effect)
- Smooth scroll behavior

### Tailwind Config (tailwind.config.ts)
- Custom color palette (royal theme)
- Font family configuration
- Animation extensions
- Responsive breakpoints

### Component Styles
- Inline Tailwind classes
- Framer Motion animations
- Conditional styling
- Hover/focus states

## 🔧 Configuration Files

### .env (Environment Variables)
```env
NEXT_PUBLIC_GROOM_NAME          # Groom's name
NEXT_PUBLIC_BRIDE_NAME          # Bride's name
NEXT_PUBLIC_WEDDING_DATE        # YYYY-MM-DD format
NEXT_PUBLIC_WEDDING_TIME        # HH:MM format
NEXT_PUBLIC_VENUE_NAME          # Venue name
NEXT_PUBLIC_VENUE_ADDRESS       # Full address
NEXT_PUBLIC_VENUE_LAT           # Latitude
NEXT_PUBLIC_VENUE_LNG           # Longitude
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY # Google Maps API key
```

### package.json (Scripts)
```json
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🚀 Data Flow

```
User visits URL
    ↓
page.tsx reads URL params (guest name)
    ↓
page.tsx reads .env variables
    ↓
Components receive props
    ↓
Components render with animations
    ↓
User interacts (scroll, click, submit)
    ↓
Animations trigger / Forms submit
    ↓
API routes process data
    ↓
Backend stores RSVP (Firebase/Supabase)
```

## 📦 Dependencies

### Core
- **next**: React framework
- **react**: UI library
- **typescript**: Type safety

### Styling
- **tailwindcss**: Utility-first CSS
- **autoprefixer**: CSS vendor prefixes
- **postcss**: CSS processing

### Animations
- **framer-motion**: Smooth animations
- **canvas-confetti**: Celebration effects

### UI Components
- **swiper**: Carousel/slider
- **react-icons**: Icon library

## 🎯 Key Features by File

| Feature | Primary File | Supporting Files |
|---------|-------------|------------------|
| Hero Animation | HeroSection.tsx | globals.css |
| Split Animation | HeroSection.tsx | - |
| Namaskar Animation | InvitationSection.tsx | - |
| Countdown Timer | EventDetails.tsx | - |
| Google Maps | MapSection.tsx | .env |
| Add to Calendar | CalendarButton.tsx | - |
| Photo Gallery | PhotoGallery.tsx | swiper.css |
| RSVP Form | RSVPSection.tsx | api/rsvp/route.ts |
| Personalization | page.tsx | All components |
| WhatsApp Share | Footer.tsx | - |

## 🔄 Development Workflow

1. **Local Development**
   ```bash
   npm run dev
   ```
   - Hot reload enabled
   - View at localhost:3000
   - Edit components in real-time

2. **Build & Test**
   ```bash
   npm run build
   npm start
   ```
   - Test production build
   - Check for errors
   - Verify performance

3. **Deploy**
   - Push to GitHub
   - Deploy via Vercel
   - Add environment variables
   - Test live site

## 📱 Responsive Design

- **Mobile First**: Base styles for mobile
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch Friendly**: Large tap targets
- **Performance**: Optimized animations

## 🎨 Customization Points

1. **Colors**: tailwind.config.ts
2. **Fonts**: app/layout.tsx
3. **Content**: .env file
4. **Photos**: public/images/
5. **Animations**: Component files
6. **Layout**: page.tsx

---

**Need help?** Refer to README.md or SETUP_GUIDE.md
