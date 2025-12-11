# Deployment Instructions

This guide covers deploying your Dev Pixel Portfolio to various hosting platforms.

## Quick Start (Local Preview)

1. Open `index.html` in any modern web browser
2. All animations and features work locally without a server

---

## GitHub Pages (Free)

### Step 1: Create GitHub Repository
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"
```

### Step 2: Push to GitHub
1. Create a new repository on GitHub (e.g., `portfolio` or `your-username.github.io`)
2. Add remote and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## Netlify (Recommended)

### Option 1: Drag & Drop
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag your entire project folder onto the deploy area
3. Done! Your site is live.

### Option 2: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. In Netlify, click **Add new site** → **Import an existing project**
3. Connect your repository
4. Deploy settings (leave defaults):
   - Build command: (empty)
   - Publish directory: `.` or `/`
5. Click **Deploy site**

### Custom Domain (Optional)
1. Go to **Domain settings** in Netlify
2. Add your custom domain
3. Update DNS records as instructed

---

## Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run in project folder: `vercel`
3. Follow prompts to deploy

Or use the web interface:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically

---

## Traditional Web Hosting (FTP)

### Files to Upload
Upload the entire project folder contents:
```
/
├── index.html
├── styles.css
├── animations.css
├── script.js
└── assets/
    ├── dev-pixel-logo.svg
    ├── dev-pixel-logo-animated.svg
    ├── favicon.svg
    └── ecohub-hero.png
```

### FTP Upload Steps
1. Connect to your hosting via FTP (FileZilla, Cyberduck, etc.)
2. Navigate to `public_html` or `www` folder
3. Upload all files maintaining the folder structure
4. Access via your domain

---

## CloudFlare Pages

1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect repository
4. Framework preset: None
5. Build output directory: `/`
6. Deploy

---

## Environment Checklist

Before deploying, verify:

- [x] All images are optimized
- [x] Links are relative (not absolute local paths)
- [x] Contact form has backend integration (if needed)
- [x] Meta tags are correct
- [x] Favicon is linked properly
- [x] All animations work in different browsers

---

## Post-Deployment

### Performance Testing
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### SEO Check
- [Google Search Console](https://search.google.com/search-console)
- Add `sitemap.xml` for better indexing

### Analytics (Optional)
Add Google Analytics or similar by inserting the tracking script in `index.html` before `</head>`.

---

## Troubleshooting

### Animations Not Working
- Check browser console for JavaScript errors
- Verify `script.js` is loading correctly
- Test in different browsers

### Fonts Not Loading
- Check internet connection (fonts load from Google Fonts CDN)
- Fallback fonts are configured in CSS

### Images Not Showing
- Verify image paths are correct
- Check file extensions match exactly (case-sensitive on some servers)

---

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
- [Web.dev Performance](https://web.dev/performance/)

---

**Happy Deploying! 🚀**
