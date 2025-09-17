# 🚀 Progressive Web App Collection

> A comprehensive collection of Progressive Web Apps built with different frameworks and technologies

[![PWA](https://img.shields.io/badge/PWA-Ready-blue.svg)](https://developers.google.com/web/progressive-web-apps/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-⚡-yellow.svg)](https://vitejs.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)

## 📖 Overview

This repository contains Progressive Web Apps (PWAs) built using **Vite + React** and **Next.js 15**, both implemented with **TypeScript**. Each implementation demonstrates different approaches to creating fast, reliable, and engaging web applications - comparing the SPA approach with Vite against the full-stack approach with Next.js.

## 🎯 Goals

- **Compare Approaches**: SPA (Vite + React) vs Full-Stack (Next.js 15) PWA implementations
- **TypeScript First**: Demonstrate type-safe PWA development practices
- **Modern Tooling**: Utilize the latest features of Vite and Next.js 15 App Router
- **Performance**: Showcase optimization techniques for both approaches
- **Best Practices**: Implement PWA patterns and modern web standards

## 🛠️ Tech Stack

This repository focuses on two main implementations, both built with **TypeScript** for better type safety and developer experience:

### 🏗️ Implementations
- [ ] **Vite + React** - Lightning-fast development with React and Vite bundler
  - ⚡ Vite for ultra-fast HMR and build times
  - ⚛️ React 19 with latest features
  - 🔷 TypeScript for type safety
  - 📱 PWA capabilities with Workbox

- [ ] **Next.js 15** - Full-stack React framework with App Router
  - 🚀 Next.js 15 with App Router architecture
  - 🔄 Server-side rendering and static generation
  - 🔷 TypeScript first-class support
  - 📱 Built-in PWA optimizations

## 📁 Project Structure

```
progressive-web-app/
├── 📂 vite-react-pwa/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── types/
│   ├── public/
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
├── 📂 nextjs-pwa/
│   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   ├── public/
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
├── 📂 shared/
│   ├── 🎨 assets/
│   ├── 🔷 types/
│   └── 📋 docs/
├── 🧪 tests/
├── 📊 benchmarks/
└── 📋 README.md
```

## ✨ PWA Features

Each implementation includes the following PWA features:

### 🔧 Core Features
- **Service Worker** - Offline functionality and caching
- **Web App Manifest** - App-like installation experience
- **Responsive Design** - Works on all screen sizes
- **Fast Loading** - Optimized performance and loading times

### 🚀 Advanced Features
- **Push Notifications** - Real-time user engagement
- **Background Sync** - Data synchronization when online
- **Offline Support** - Full functionality without internet
- **App Shell Architecture** - Instant loading experience
- **Add to Home Screen** - Native app-like installation

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/R-nasPT/progressive-web-app.git
   cd progressive-web-app
   ```

2. **Choose an implementation**
   ```bash
   # For Vite + React PWA
   cd vite-react-pwa
   
   # For Next.js 15 PWA
   cd nextjs-pwa
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

## 📊 Performance Comparison

| Implementation | Bundle Size | Build Time | PWA Score | Lighthouse Score | TypeScript |
|---------------|-------------|------------|-----------|------------------|------------|
| Vite + React  | TBD         | TBD        | TBD       | TBD              | ✅ Full    |
| Next.js 15    | TBD         | TBD        | TBD       | TBD              | ✅ Full    |

*Benchmarks will be updated as implementations are completed*

## 🧪 Testing

Each framework implementation includes comprehensive testing:

```bash
# Run all tests
npm run test

# Run PWA audit
npm run audit:pwa

# Run performance tests
npm run test:performance

# Run cross-browser tests
npm run test:browser
```

## 📚 Documentation

- [PWA Checklist](./docs/pwa-checklist.md)
- [Performance Guidelines](./docs/performance.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

## 🙏 Acknowledgments

- [Progressive Web App Documentation](https://web.dev/progressive-web-apps/)
- [Workbox](https://developers.google.com/web/tools/workbox/) for service worker utilities
- All the amazing framework communities

---

<div align="center">
  <strong>⭐ Star this repo if you find it useful!</strong><br>
  <sub>Built with ❤️ for the developer community</sub>
</div>
