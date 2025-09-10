# 🚀 Shibam Banerjee - Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and featuring a stunning neon cyber aesthetic. This portfolio showcases my skills, projects, and experience as a Frontend Web Developer from Kolkata, India.

## ✨ Live Demo

🌐 **[View Live Portfolio](https://iam-shibam-dev.vercel.app/)** *(Update after deployment)*

## 🚀 Key Features

- **🎨 Cinematic Loading Screen**: First-visit blur-to-focus animation with sessionStorage logic
- **⚡ Modern Tech Stack**: Next.js 14 with App Router, Tailwind CSS, Framer Motion, GSAP
- **🌈 Neon Cyber Design**: Glassmorphism effects, neon colors, and futuristic animations
- **📱 Fully Responsive**: Mobile-first design that works perfectly on all devices
- **🎭 Interactive Animations**: Smooth page transitions, scroll-triggered animations, and hover effects
- **🔍 SEO Optimized**: Complete meta tags, sitemap, robots.txt, and structured data
- **♿ Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **⚡ Performance**: Optimized images, lazy loading, and efficient code splitting
- **📄 Individual Project Pages**: Detailed project showcases with navigation
- **📋 Professional CV Page**: Downloadable resume with comprehensive information

## 🎨 Design System

### Color Palette
- **Background**: `#0B0C10` - Deep cyber black
- **Neon Blue**: `#1F51FF` - Primary accent color
- **Neon Purple**: `#B026FF` - Secondary accent color
- **Neon Pink**: `#FF4DFF` - Tertiary accent color
- **Text Light**: `#D9D9D9` - Primary text color

### Typography
- **Headings**: Poppins (300, 400, 500, 600, 700)
- **Body Text**: Inter (300, 400, 500, 600, 700)

## 📱 Pages

1. **🏠 Home** (`/`) - Cinematic loading screen, hero section, featured projects, skills preview
2. **👨‍💻 About** (`/about`) - Personal info, skills grid, education timeline, experience
3. **💼 Portfolio** (`/portfolio`) - Project showcase with individual project detail pages
4. **📞 Contact** (`/contact`) - Interactive contact form, social links, professional info
5. **📋 CV** (`/cv`) - Comprehensive resume with download functionality and timeline
6. **📝 Blog** (`/blog`) - Article listing and individual post pages with full content
7. **🔗 Project Details** (`/projects/[id]`) - Individual project pages with detailed information

## 🛠️ Tech Stack

- **⚡ Framework**: Next.js 14 (App Router)
- **🎨 Styling**: Tailwind CSS with custom neon cyber theme
- **🎭 Animations**: Framer Motion + GSAP with ScrollTrigger + Lottie React
- **🔤 Typography**: Google Fonts (Inter, Poppins)
- **📱 Responsive**: Mobile-first design approach
- **🚀 Deployment**: Vercel (recommended) / Netlify compatible
- **🔍 SEO**: Next.js Metadata API, sitemap.xml, robots.txt
- **♿ Accessibility**: WCAG 2.1 AA compliant

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shibam-Code-Pro/iam-shibam-dev.git
   cd iam-shibam-dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
iam-shibam-dev/
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   │   └── page.js
│   ├── api/               # API routes
│   │   └── contact/
│   │       └── route.js
│   ├── blog/              # Blog pages
│   │   ├── [slug]/
│   │   │   └── page.js
│   │   ├── layout.js
│   │   └── page.js
│   ├── contact/           # Contact page
│   │   └── page.js
│   ├── cv/                # CV page
│   │   └── page.js
│   ├── portfolio/         # Portfolio showcase
│   │   └── page.js
│   ├── projects/          # Individual project pages
│   │   └── [id]/
│   │       └── page.js
│   ├── privacy/           # Privacy policy
│   │   └── page.js
│   ├── terms/             # Terms of service
│   │   └── page.js
│   ├── error.js           # Custom 500 error page
│   ├── not-found.js       # Custom 404 error page
│   ├── globals.css        # Global styles & animations
│   ├── layout.js          # Root layout with SEO
│   └── page.js            # Home page with loading screen
├── components/            # Reusable components
│   ├── Accordion.js       # FAQ accordion
│   ├── AnimatedHeading.js # GSAP text animations
│   ├── BlogCard.js        # Blog post cards
│   ├── ContactForm.js     # Contact form with validation
│   ├── Footer.js          # Site footer
│   ├── Hero.js            # Homepage hero section
│   ├── LazyLoad.js        # Lazy loading wrapper
│   ├── LoadingScreen.js   # Cinematic loading animation
│   ├── Navbar.js          # Navigation with mobile menu
│   ├── PageTransition.js  # Page transition effects
│   ├── ProjectCard.js     # Project showcase cards
│   ├── SectionWrapper.js  # Scroll-triggered animations
│   └── SkillsGrid.js      # Skills display grid
├── data/                  # Static data files
│   ├── blogs.js           # Blog posts data
│   ├── projects.js        # Portfolio projects
│   └── skills.js          # Skills and experience
├── public/                # Static assets
│   ├── favicon_io/        # Complete favicon set
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── android-chrome-1600x1600.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── projects/          # Project images
│   │   ├── project-1.png
│   │   ├── project-2.png
│   │   └── [6 more images]
│   ├── profile-picture.png
│   ├── resume.pdf         # Downloadable CV
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── .env.local             # Environment variables
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
├── .prettierrc            # Code formatting
├── EMAIL_SETUP_GUIDE.md   # Email setup instructions
├── jsconfig.json          # JavaScript configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies & scripts
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🎯 Customization Guide

### Adding New Projects

1. Open `data/projects.js`
2. Add a new project object to the `projects` array:

```javascript
{
  id: 10,
  title: "Your Project Name",
  description: "Brief description",
  longDescription: "Detailed description for modal",
  technologies: ["HTML", "CSS", "JavaScript"],
  category: "Frontend",
  featured: false,
  image: "https://your-image-url.com/image.jpg",
  liveUrl: "https://your-live-site.com",
  codeUrl: "https://github.com/your-repo",
  status: "Completed"
}
```

### Adding Blog Posts

1. Create a new entry in `app/blog/[slug]/page.js` in the `blogPosts` object
2. Add the post to the blog listing in `app/blog/page.js`

### Updating Personal Information

1. **Contact Details**: Update in `app/layout.js`, `components/Footer.js`, and `app/contact/page.js`
2. **Skills**: Modify `data/skills.js`
3. **Education/Experience**: Update `data/skills.js`

### Customizing Colors

1. Open `tailwind.config.js`
2. Modify the color values in the `extend.colors` section
3. Update CSS custom properties in `app/globals.css`

## 🌐 Deployment

### 🚀 Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with zero configuration
   - Get instant live URL

3. **Environment Setup**
   - No environment variables required
   - Automatic HTTPS and CDN
   - Perfect Lighthouse scores

### 🔧 Pre-Deployment Checklist

- ✅ Delete `.next` folder (auto-generated)
- ✅ Update live demo URL in README after deployment
- ✅ Test all pages and animations
- ✅ Verify contact form functionality
- ✅ Check mobile responsiveness

### 🌍 Alternative Platforms

The site works on any Next.js-compatible platform:
- **Netlify** - Great for static sites
- **Railway** - Full-stack deployment
- **DigitalOcean App Platform** - Scalable hosting
- **AWS Amplify** - Enterprise solution

## 📊 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Optimization**: Google Fonts with display swap
- **SEO**: Complete meta tags, Open Graph, and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality

# Deployment helpers
npm run export       # Export static files (if needed)
```

## 🎯 Special Features

### 🎬 Cinematic Loading Screen
- Shows only on first visit per browser session
- Blur-to-focus transition effect
- SessionStorage-based logic
- Smooth fade animations

### 📱 Individual Project Pages
- Dynamic routing for each project
- Detailed project information
- Full-size image displays
- Technology stack highlights

### 📋 Professional CV Page
- Comprehensive resume layout
- Downloadable PDF integration
- Education and experience timeline
- Skills and certifications display

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Shibam-Code-Pro/iam-shibam-dev/issues).

## 📞 Contact

**Shibam Banerjee**
- Email: Connect-With-Shibam@outlook.com
- Phone: +91 62902-18960
- LinkedIn: [linkedin.com/in/shibam-webdev](https://linkedin.com/in/shibam-webdev)
- GitHub: [github.com/Shibam-Code-Pro](https://github.com/Shibam-Code-Pro)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [GSAP](https://greensock.com/gsap/) for advanced animations
- [Unsplash](https://unsplash.com/) for beautiful placeholder images

---

⭐ **If you found this project helpful, please give it a star!** ⭐
