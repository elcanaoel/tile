# Premium Tile - Next.js Conversion

This project is a conversion of the original Premium Tile website to a Next.js application.

## Overview

The original static HTML/CSS/JavaScript website has been converted to a modern Next.js application with React components. All functionality has been preserved, including:

- Responsive design
- Interactive elements (navigation, forms, sliders)
- Animations and transitions
- Mobile menu toggle
- Scroll effects

## Changes Made

1. **Project Structure**: Converted from static files to Next.js app directory structure
2. **Components**: Broke down the single HTML file into React components
3. **State Management**: Used React hooks for state management (useState, useEffect)
4. **Event Handling**: Converted JavaScript event listeners to React event handlers
5. **Styling**: Moved all CSS to global stylesheets
6. **Fonts and Icons**: Integrated Google Fonts and Font Awesome via CDN

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
premium-tile-next/
├── public/              # Static assets
├── src/
│   └── app/             # App router directory
│       ├── layout.tsx   # Root layout
│       └── page.tsx     # Home page
├── styles/              # Global styles
└── package.json         # Dependencies and scripts
```

## Features

- **Responsive Design**: Works on all device sizes
- **Smooth Animations**: CSS animations and transitions
- **Interactive UI**: Form validation and user feedback
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Server-side rendering for better SEO

## Dependencies

- Next.js 15
- React 19
- React DOM 19

## Author

Joel Enejo

## Site Creator Credit

Site created and designed by Joel