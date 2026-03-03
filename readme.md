# WebPrestamos

A modern web application for loan management built with [Astro](https://astro.build). This project provides a lightweight, fast frontend with static site generation and includes Docker support for easy deployment.

## Features

- **Astro 5** – Fast, content‑focused web framework
- **TypeScript** – Type‑safe development
- **Docker** – Containerized development and production environments
- **Zero‑JS by default** – Fast loading, minimal client‑side JavaScript
- **Responsive layout** – Built‑in responsive design

## Getting Started

### Prerequisites

- Node.js 18+ or later
- npm (or pnpm, yarn)

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd WebPrestamos
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build

Generate a production‑ready static site:

```bash
npm run build
```

The output will be placed in the `dist/` directory.

### Preview

Preview the built site locally:

```bash
npm run preview
```

## Docker

### Build the Docker Image

```bash
docker build -t web-prestamos .
```

### Run the Container

```bash
docker run -p 3000:3000 web-prestamos
```

The application will be served on `http://localhost:3000`.

## Project Structure

```
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/      # Project‑specific assets (SVG, backgrounds)
│   ├── components/  # Reusable Astro components
│   ├── layouts/     # Page layout components
│   └── pages/       # Astro pages (routes)
├── astro.config.mjs # Astro configuration
├── package.json     # Dependencies and scripts
├── Dockerfile       # Docker container definition
└── tsconfig.json   # TypeScript configuration
```

## License

This project is licensed under the terms of the MIT license. See the LICENSE file for details.