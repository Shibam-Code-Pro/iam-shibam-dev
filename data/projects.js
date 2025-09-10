export const projects = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with modern web technologies",
    longDescription: "A fully responsive portfolio website showcasing my skills and projects. Features semantic HTML5, CSS3 with Flexbox/Grid, vanilla JavaScript for interactivity, and Bootstrap for responsive design. Includes navigation toggle, form validation, and optimized performance.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: "Frontend",
    featured: true,
    image: "/projects/project-1.png",
    liveUrl: "https://portfolio-shibam.netlify.app/",
    codeUrl: "https://github.com/Shibam-Code-Pro/portfolio-shibam",
    status: "Completed"
  },
  {
    id: 2,
    slug: "ecommerce-cart",
    title: "E-Commerce Cart",
    description: "Dynamic shopping cart application with local storage functionality",
    longDescription: "Interactive e-commerce cart system with add/remove functionality, automatic total calculations, localStorage persistence, and responsive grid layout. Built with vanilla JavaScript and Bootstrap for optimal performance and user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "LocalStorage"],
    category: "Responsive",
    featured: true,
    image: "/projects/project-2.png",
    liveUrl: "https://ecommerce-cart-shibam.netlify.app/",
    codeUrl: "https://github.com/Shibam-Code-Pro/ecommerce-cart-shibam",
    status: "Completed"
  },
  {
    id: 3,
    slug: "blog-application",
    title: "Blog Application",
    description: "WordPress-based blog with custom theme integration",
    longDescription: "Custom WordPress blog application featuring theme development, Astra framework integration, Elementor compatibility, and responsive design. Includes custom post types, SEO optimization, and performance enhancements.",
    technologies: ["WordPress", "PHP", "Astra", "Elementor", "CSS"],
    category: "CMS",
    featured: true,
    image: "/projects/project-3.png",
    liveUrl: "https://wordpress-shibam.lovestoblog.com/",
    codeUrl: "https://github.com/Shibam-Code-Pro/blog-app-shibam",
    status: "Completed"
  },
  {
    id: 4,
    slug: "weather-application",
    title: "Weather Application",
    description: "Real-time weather app using Fetch API and async/await",
    longDescription: "Modern weather application utilizing Fetch API for real-time data retrieval, async/await for asynchronous operations, and dynamic DOM updates. Features location-based weather, 5-day forecast, and responsive design.",
    technologies: ["JavaScript", "Fetch API", "HTML5", "CSS3"],
    category: "JavaScript",
    featured: false,
    image: "/projects/project-4.png",
    liveUrl: "https://weather-app-shibam.netlify.app/",
    codeUrl: "https://github.com/Shibam-Code-Pro/weather-app-shibam",
    status: "Completed"
  },
  {
    id: 5,
    slug: "figma-to-html",
    title: "Figma to HTML Conversion",
    description: "Pixel-perfect responsive conversion from Figma designs",
    longDescription: "Professional conversion of Figma designs to responsive HTML/CSS code with pixel-perfect accuracy. Includes cross-browser compatibility, mobile-first approach, and optimized performance.",
    technologies: ["HTML5", "CSS3", "Figma", "Responsive Design"],
    category: "Frontend",
    featured: false,
    image: "/projects/project-5.png",
    liveUrl: "https://figma-to-html-shibam.netlify.app/",
    codeUrl: "https://github.com/Shibam-Code-Pro/figma-to-html-shibam",
    status: "Completed"
  },
  {
    id: 6,
    slug: "web-components-library",
    title: "Mini Web Components Library",
    description: "Reusable vanilla JavaScript UI component library",
    longDescription: "Collection of reusable UI components built with vanilla JavaScript. Includes modals, dropdowns, carousels, and form elements with customizable styling and easy integration.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Component Architecture"],
    category: "JavaScript",
    featured: false,
    image: "/projects/project-6.png",
    liveUrl: "https://mini-web-components-library-shibam.netlify.app/",
    codeUrl: "https://github.com/Shibam-Code-Pro/mini-web-components-library-shibam",
    status: "Completed"
  },
  {
    id: 7,
    slug: "scientific-calculator",
    title: "Scientific Calculator",
    description: "Advanced calculator with mathematical operations and parsing",
    longDescription: "Feature-rich scientific calculator supporting complex mathematical operations, expression parsing, operator precedence, and memory functions. Built with vanilla JavaScript and responsive design.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Mathematical Parsing"],
    category: "JavaScript",
    featured: false,
    image: "/projects/project-7.png",
    liveUrl: "https://scientific-calculator-shibam.netlify.app/",
    codeUrl: "https://github.com/Shibam-Code-Pro/scientific-calculator-shibam",
    status: "Completed"
  },
  {
    id: 8,
    slug: "todo-application",
    title: "Modern To-Do Application",
    description: "Full-featured task management app with CRUD operations",
    longDescription: "Comprehensive task management application with CRUD operations, localStorage persistence, filtering, sorting, priority levels, and due dates. Features modern UI/UX design and responsive layout.",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "CRUD"],
    category: "JavaScript",
    featured: false,
    image: "/projects/project-8.png",
    liveUrl: "https://to-do-list-shibam.netlify.app/",
    codeUrl: "https://github.com/Shibam-Code-Pro/to-do-list-shibam",
    status: "Completed"
  },
  {
    id: 9,
    slug: "google-homepage-clone",
    title: "Google Homepage Clone",
    description: "Pixel-perfect recreation of Google's homepage",
    longDescription: "Accurate recreation of Google's homepage with responsive design, interactive elements, and attention to detail. Demonstrates proficiency in HTML/CSS and design replication skills.",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    category: "Responsive",
    featured: false,
    image: "/projects/project-9.png",
    liveUrl: "https://googlle-homepage-shibam.netlify.app/",
    codeUrl: "https://github.com/Shibam-Code-Pro/google-homepage-shibam",
    status: "Completed"
  }
]

export const projectCategories = [
  "All",
  "Frontend",
  "CMS",
  "JavaScript",
  "Responsive"
]

export const featuredProjects = projects.filter(project => project.featured)
