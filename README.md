# Priyanshu Singha — AI & ML Developer Portfolio

A premium futuristic developer portfolio built with React, Three.js, Framer Motion, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18** + **Vite** — Fast build tooling
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — 3D animations
- **Framer Motion** — Smooth scroll & entrance animations
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icon library

## 📁 Folder Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── NeuralScene.jsx        # 3D neural sphere + particles
│   │   ├── sections/
│   │   │   ├── Hero.jsx               # Full-screen 3D hero
│   │   │   ├── About.jsx              # Info cards
│   │   │   ├── Skills.jsx             # Animated progress bars + tech grid
│   │   │   ├── Experience.jsx         # Timeline layout
│   │   │   ├── Education.jsx          # Animated education cards
│   │   │   ├── Projects.jsx           # 3D hover project cards
│   │   │   ├── Certifications.jsx     # Cert cards with badges
│   │   │   └── Contact.jsx            # Glassmorphism form
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── LoadingScreen.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
cd portfolio
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## 🎨 Design Features

- **Dark futuristic** background (#0f172a)
- **3D Neural Sphere** with mouse-tracking interactivity
- **Particle background** using Three.js BufferGeometry
- **Typing animation** cycling through titles
- **Glassmorphism** form design in Contact section
- **Neon glow** hover effects throughout
- **Animated progress bars** for skills
- **Timeline layouts** for experience & education
- **Smooth scroll** with Framer Motion viewport animations
- **Fully responsive** for mobile, tablet, and desktop

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the /dist folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## ✏️ Customization

- Update personal info in each section component under `src/components/sections/`
- Modify colors in `tailwind.config.js` and `src/index.css` CSS variables
- Add/remove skills in `Skills.jsx`
- Add projects in `Projects.jsx`

---
Built with ❤️ by Priyanshu Singha
