# Sinan Baykara Portfolio Website - Design Specification

## Project Overview
A modern, responsive, and minimalist portfolio website for molecular biologist Sinan Baykara built with Next.js.

## Design Philosophy
- **Modern**: Clean typography, subtle animations, contemporary layout
- **Responsive**: Mobile-first approach, works seamlessly across all devices
- **Minimalist**: Focus on content, reduce visual clutter, elegant simplicity

## Color Palette
- **Primary Green**: #2D5A27 (Dark Forest Green)
- **Secondary Green**: #4A7C59 (Medium Green)
- **Accent Green**: #6B8E6B (Light Sage Green)
- **Background**: #F8F9FA (Light Gray)
- **Text Primary**: #2C3E50 (Dark Blue-Gray)
- **Text Secondary**: #6C757D (Medium Gray)
- **White**: #FFFFFF

## Typography
- **Primary Font**: Inter (Google Fonts) - Clean, modern, highly readable
- **Headings**: Inter Bold (600-700 weight)
- **Body Text**: Inter Regular (400 weight)
- **Font Sizes**: 
  - H1: 2.5rem (40px)
  - H2: 2rem (32px)
  - H3: 1.5rem (24px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

## Layout Structure
### Header
- Logo/Name on the left
- Navigation menu on the right (desktop) / hamburger menu (mobile)
- Fixed position with subtle shadow

### Main Content Areas
- **Home Page**: Hero section, featured work, brief intro
- **About Page**: Biography, education, research interests, skills
- **Contact Page**: Contact form, social links, location info

### Footer
- Copyright, social media links, minimal design

## Component Specifications

### Hero Section (Home Page)
- Full viewport height
- Centered content with name, title, and brief description
- Subtle background pattern or gradient
- Call-to-action button

### About Section
- Two-column layout (desktop) / single column (mobile)
- Professional photo placeholder
- Timeline of education and experience
- Skills grid with molecular biology focus

### Contact Form
- Clean form with validation
- Fields: Name, Email, Subject, Message
- Submit button with loading state
- Contact information sidebar

## Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## Animation Guidelines
- Subtle hover effects on buttons and links
- Smooth page transitions
- Fade-in animations for content sections
- No excessive animations - keep it professional

## Content Strategy
- Focus on molecular biology expertise
- Highlight research experience
- Professional tone throughout
- Clear call-to-actions

## Technical Requirements
- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive images with Next.js Image component
- SEO optimization
- Fast loading times
- Accessibility compliance (WCAG 2.1)

## File Structure
```
src/
├── app/
│   ├── page.tsx (Home)
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   └── ContactForm.tsx
└── lib/
    └── utils.ts
```

## Success Metrics
- Fast loading (< 3 seconds)
- Mobile-friendly design
- Professional appearance
- Easy navigation
- Contact form functionality
- SEO optimized
