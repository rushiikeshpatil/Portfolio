# Rushikesh Portfolio - Bootstrap

Angular 17 portfolio with Bootstrap 5 — dark professional theme, animations, and sticky bottom navbar.

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rushiikeshpatil/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   ng serve
   ```
   
   Navigate to `http://localhost:4200/` to view the portfolio.

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Angular CLI (v17 or higher)

If you don't have Angular CLI installed globally:
```bash
npm install -g @angular/cli
```

## Project Structure

- `src/assets/` - Contains images and documents
  - `Photo.jpg` - Profile photo
  - `Rushikesh_Patil.pdf` - Resume/CV
- `src/app/components/` - Angular components for each page
- `src/styles.scss` - Global styles

## Deployment

To deploy to GitHub Pages:

1. **Build for production:**
   ```bash
   ng build --configuration=production --base-href "/Portfolio/"
   ```

2. **Deploy to gh-pages branch:**
   ```bash
   npx angular-cli-ghpages --dir=dist/rushikesh-portfolio-bootstrap --branch=gh-pages --no-silent
   ```

## Live Demo

**URL:** https://rushiikeshpatil.github.io/Portfolio/home

## Technologies Used

- Angular 17
- Bootstrap 5.3.2
- Bootstrap Icons 1.13.1
- SCSS
- TypeScript