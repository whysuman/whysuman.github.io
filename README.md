# Portfolio Website -- instructinos for myself to host the website on github pages

## Deploy to GitHub Pages

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


