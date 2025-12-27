# Portfolio Website

## Deploy to GitHub Pages

### Option A: GitHub Actions (recommended)
Push to the `work` branch and the workflow will build and deploy automatically.

If you want to use a different default branch, update `.github/workflows/deploy.yml`.

### Option B: Manual deploy
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build and publish:
   ```bash
   npm run deploy
   ```

### Important
- Set `base` in `vite.config.js` to your repo name (e.g. `/portfolio_website/`) before deploying.
- Update `homepage` in `package.json` if your GitHub username or repo name changes.
- In your repository settings, set **Pages** to deploy from the `gh-pages` branch and the `/ (root)` folder.
- If you see a 404 for `/src/main.jsx`, Pages is serving your source branch instead of the built `dist` output.
