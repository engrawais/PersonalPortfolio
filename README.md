# Muhammad Awais - Personal Portfolio Website

A sleek, modern, fully responsive personal portfolio website built with Next.js 14, TypeScript, and Ant Design v5. Designed for static export with no backend dependencies.

## 🚀 Features

- **Single Page Application** with smooth scrolling and anchor navigation
- **Fully Responsive** design optimized for all devices
- **Accessible** with keyboard navigation and screen reader support
- **SEO Optimized** with proper metadata and OpenGraph tags
- **Static Export Ready** for deployment to any static hosting service
- **Beautiful UI** with Ant Design components and custom theming
- **Performance Optimized** with minimal bundle size

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI Library:** Ant Design v5
- **Styling:** CSS Modules + Global CSS
- **Icons:** Ant Design Icons
- **Build Tool:** Next.js built-in bundler

## 📋 Prerequisites

- Node.js 18.0 or later
- pnpm, npm, or yarn package manager

## 🏃‍♂️ Quick Start

### Installation

```bash
# Clone the repository (if applicable)
git clone <repository-url>
cd portfolio-website

# Install dependencies
pnpm install
# or
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
# Build the application
pnpm build
# or
npm run build
# or
yarn build
```

### Static Export

```bash
# Export as static files
pnpm build
# The static files will be generated in the 'out' directory
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── Contact.tsx         # Contact section
│   ├── Education.tsx       # Education section
│   ├── Experience.tsx      # Professional experience
│   ├── HeaderNav.tsx       # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Section.tsx        # Reusable section wrapper
│   ├── Skills.tsx         # Technical skills
│   └── Summary.tsx        # About/summary section
├── data/
│   └── resume.ts          # Resume data object
├── types/
│   └── resume.ts          # TypeScript interfaces
├── public/
│   ├── favicon.ico        # Site favicon
│   └── resume.pdf         # Downloadable resume
└── README.md
```

## 🎨 Customization

### Personal Data

Edit the resume data in `/data/resume.ts`:

```typescript
export const resume: Resume = {
  name: "Your Name",
  title: "Your Title",
  // ... update with your information
};
```

### Theming

Modify the Ant Design theme in `/app/page.tsx`:

```typescript
const theme = {
  token: {
    colorPrimary: '#1677ff', // Change primary color
    borderRadius: 8,         // Adjust border radius
    // ... other theme tokens
  },
};
```

### Sections

- Add/remove sections by editing the main page component
- Modify section content by updating the respective components
- Adjust styling in the global CSS file

## 🚢 Deployment

### Static Hosting (Recommended)

After running `pnpm build`, deploy the `out` directory to:

- **Netlify**: Drag and drop the `out` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Upload contents to your repository
- **AWS S3**: Upload to S3 bucket with static website hosting

### Build Command for CI/CD

```bash
npm run build
```

The static files will be in the `out` directory.

## ♿ Accessibility Features

- Keyboard navigation support
- Skip-to-content link
- Proper heading hierarchy
- Alt text for images and icons
- High contrast ratios
- Screen reader friendly

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration

The site is configured for static export in `next.config.js`. Key settings:

- `output: 'export'` - Enables static export
- `images: { unoptimized: true }` - Required for static export
- ESLint disabled during build for faster builds

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

---

**Built with ❤️ by Muhammad Awais**