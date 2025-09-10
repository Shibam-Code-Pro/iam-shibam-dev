// Centralized blog posts data
export const blogPosts = [
  {
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques for Better Web Design',
    excerpt: 'Explore the latest CSS features and techniques that can enhance your web development workflow and create stunning user interfaces. Learn about CSS Grid, Flexbox, custom properties, and more.',
    date: '2024-01-15',
    readTime: 5,
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Shibam Banerjee',
    content: `
# Modern CSS Techniques for Better Web Design

CSS has evolved tremendously over the past few years, introducing powerful new features that make web design more flexible and efficient. In this article, we'll explore some of the most impactful modern CSS techniques that every frontend developer should know.

## CSS Grid: The Game Changer

CSS Grid has revolutionized how we approach layout design. Unlike Flexbox, which is primarily one-dimensional, Grid allows us to create complex two-dimensional layouts with ease.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

## Custom Properties (CSS Variables)

CSS custom properties bring dynamic styling capabilities that were previously only possible with preprocessors.

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --spacing-unit: 1rem;
}

.component {
  background-color: var(--primary-color);
  margin: calc(var(--spacing-unit) * 2);
}
\`\`\`

## Container Queries

Container queries allow you to apply styles based on the size of a container rather than the viewport, enabling truly modular component design.

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: flex;
    align-items: center;
  }
}
\`\`\`

## Conclusion

These modern CSS techniques provide powerful tools for creating responsive, maintainable, and visually appealing web designs. By incorporating these methods into your workflow, you'll be able to build more sophisticated and efficient stylesheets.

Start experimenting with these techniques in your next project and see the difference they can make!
    `
  },
  {
    slug: 'javascript-best-practices',
    title: 'JavaScript Best Practices for Clean Code',
    excerpt: 'Learn essential JavaScript best practices that will make your code more maintainable, readable, and efficient. Discover patterns and techniques used by professional developers.',
    date: '2024-01-10',
    readTime: 7,
    category: 'JavaScript',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Shibam Banerjee',
    content: `
# JavaScript Best Practices for Clean Code

Writing clean, maintainable JavaScript code is crucial for long-term project success. Here are some essential best practices that every JavaScript developer should follow.

## Use Meaningful Variable Names

Choose descriptive names that clearly indicate what the variable represents.

\`\`\`javascript
// Bad
const d = new Date();
const u = users.filter(u => u.active);

// Good
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
\`\`\`

## Embrace Modern ES6+ Features

Modern JavaScript provides many features that make code more readable and concise.

\`\`\`javascript
// Destructuring
const { name, email } = user;

// Arrow functions
const multiply = (a, b) => a * b;

// Template literals
const message = \`Hello, \${name}! You have \${count} new messages.\`;
\`\`\`

## Use Consistent Code Formatting

Consistent formatting makes your code easier to read and maintain.

## Handle Errors Gracefully

Always implement proper error handling to make your applications more robust.

\`\`\`javascript
try {
  const data = await fetchUserData(userId);
  return data;
} catch (error) {
  console.error('Failed to fetch user data:', error);
  throw new Error('Unable to load user information');
}
\`\`\`

## Conclusion

Following these best practices will help you write cleaner, more maintainable JavaScript code that your future self and your team will thank you for.
    `
  },
  {
    slug: 'responsive-design-tips',
    title: 'Responsive Design Tips for Mobile-First Development',
    excerpt: 'Master the art of responsive design with these practical tips and techniques for creating mobile-first web experiences that work seamlessly across all devices.',
    date: '2024-01-05',
    readTime: 6,
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Shibam Banerjee',
    content: `
# Responsive Design Tips for Mobile-First Development

In today's multi-device world, responsive design isn't just a nice-to-have—it's essential. This guide will walk you through proven strategies for creating mobile-first web experiences that work seamlessly across all devices.

## Start with Mobile-First Approach

Design for mobile devices first, then progressively enhance for larger screens.

\`\`\`css
/* Mobile-first base styles */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
}
\`\`\`

## Use Flexible Grid Systems

CSS Grid and Flexbox provide powerful tools for creating responsive layouts.

## Optimize Images for Different Devices

Use responsive images to ensure fast loading across all devices.

\`\`\`html
<picture>
  <source media="(min-width: 768px)" srcset="large-image.jpg">
  <source media="(min-width: 480px)" srcset="medium-image.jpg">
  <img src="small-image.jpg" alt="Responsive image">
</picture>
\`\`\`

## Conclusion

Responsive design is about creating flexible, user-friendly experiences that work everywhere. Start with mobile, think progressively, and always test on real devices.
    `
  },
  {
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization: A Complete Guide',
    excerpt: 'Discover proven strategies to optimize your website performance, improve loading times, and enhance user experience. Learn about image optimization, lazy loading, and more.',
    date: '2023-12-28',
    readTime: 8,
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Shibam Banerjee',
    content: `
# Web Performance Optimization: A Complete Guide

Web performance is crucial for user experience and SEO. This comprehensive guide covers essential strategies to optimize your website's loading times and overall performance.

## Image Optimization

Images often account for the majority of a webpage's size. Optimize them for better performance.

\`\`\`css
/* Use modern image formats */
.hero-image {
  background-image: url('hero.webp');
  background-size: cover;
}
\`\`\`

## Lazy Loading

Load content only when it's needed to improve initial page load times.

\`\`\`javascript
// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
\`\`\`

## Code Splitting

Split your JavaScript bundles to load only what's necessary.

## Conclusion

Performance optimization is an ongoing process. Monitor your metrics and continuously improve your website's speed and user experience.
    `
  },
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React: A Beginner\'s Guide',
    excerpt: 'New to React? This comprehensive guide will help you understand the fundamentals of React development, from components to state management and beyond.',
    date: '2023-12-20',
    readTime: 10,
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Shibam Banerjee',
    content: `
# Getting Started with React: A Beginner's Guide

React is a powerful JavaScript library for building user interfaces. This guide will help you understand the fundamentals and get started with React development.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces, particularly web applications.

## Components

Components are the building blocks of React applications.

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
<Welcome name="Shibam" />
\`\`\`

## State Management

State allows components to manage and update their data.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Conclusion

React's component-based architecture makes it easy to build and maintain complex user interfaces. Start with these basics and gradually explore more advanced concepts.
    `
  },
  {
    slug: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs Flexbox: When to Use Which',
    excerpt: 'Understand the differences between CSS Grid and Flexbox, and learn when to use each layout method for optimal results in your web projects.',
    date: '2023-12-15',
    readTime: 6,
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Shibam Banerjee',
    content: `
# CSS Grid vs Flexbox: When to Use Which

Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes. Understanding when to use each will make you a more effective frontend developer.

## CSS Grid: Two-Dimensional Layouts

Use CSS Grid when you need to control both rows and columns.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  height: 100vh;
}
\`\`\`

## Flexbox: One-Dimensional Layouts

Use Flexbox for arranging items in a single direction.

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## When to Use Grid

- Complex two-dimensional layouts
- When you need precise control over both rows and columns
- Creating overall page layouts

## When to Use Flexbox

- One-dimensional layouts (row or column)
- Centering content
- Distributing space between items
- Component-level layouts

## Conclusion

Grid and Flexbox work great together. Use Grid for the overall layout structure and Flexbox for component-level arrangements.
    `
  }
]

// Get featured posts for home page (first 3 posts)
export const getFeaturedPosts = () => blogPosts.slice(0, 3)

// Get all categories
export const getCategories = () => {
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]
  return categories
}

// Get post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}
