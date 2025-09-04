# Portfolio Website

Professional portfolio website built with React and TypeScript. Showcases skills, projects, and contact information.

## Tech Stack

- React.js + TypeScript
- CSS3 + Tailwind CSS
- Responsive design principles
- Form handling via Formspree

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment Notes

1. Package setup:

   ```
   "homepage": "https://vinaybomma.github.io"
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

2. Deploy command:

   ```bash
   npm run deploy
   ```

3. Structure:
   - `main` branch: Source code
   - `gh-pages` branch: Built files for deployment

## Project Structure

- `src/sections/` - Main page sections
- `src/styles/` - CSS styling
- `src/assets/` - Static resources
- `src/context/` - Context providers

## Key Components

- `Header.tsx` - Navigation and theme toggle
- `Hero.tsx` - Main banner with introduction
- `Skills.tsx` - Technical skills with proficiency indicators
- `Projects.tsx` - Portfolio projects with details
- `Contact.tsx` - Contact form and social links
- `Footer.tsx` - Copyright and additional links
