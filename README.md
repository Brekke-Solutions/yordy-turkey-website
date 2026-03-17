# Yordy Turkey Farm Website

New website for [Yordy Turkey Farm](https://www.yordyturkey.com/) – replacing the existing Wix site.  
Hosted on **GitHub Pages** at [yordyturkey.com](https://www.yordyturkey.com/).

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Static HTML / CSS / JS (no build step required) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Custom domain | yordyturkey.com (via `CNAME`) |

---

## Folder Structure

```
yordy-turkey-website/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions: deploy to GitHub Pages
├── src/                      # All website source files (deployed as-is)
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css     # Main stylesheet
│   │   ├── js/
│   │   │   └── main.js       # Main JavaScript
│   │   └── images/           # Static images
│   ├── components/
│   │   ├── nav.html          # Shared navigation snippet (reference)
│   │   └── footer.html       # Shared footer snippet (reference)
│   ├── pages/                # Additional HTML pages (e.g. about.html)
│   ├── index.html            # Homepage
│   └── CNAME                 # Custom domain for GitHub Pages
├── .gitignore
└── README.md
```

---

## Local Development

No build tools are required. You can open the site directly in a browser or use any static file server.

### Option 1 – Open directly

```bash
open src/index.html
```

### Option 2 – Python local server (recommended, avoids CORS quirks)

```bash
cd src
python3 -m http.server 8080
# then open http://localhost:8080
```

### Option 3 – Node.js `serve` package

```bash
npx serve src
# then open the URL shown in your terminal
```

### Option 4 – VS Code Live Server extension

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `src/index.html`, and choose **Open with Live Server**.

---

## Deployment

Deployment is fully automated via **GitHub Actions** (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

| Trigger | Action |
|---|---|
| Push to `main` | Build & deploy to GitHub Pages |
| Manual trigger | `workflow_dispatch` in the Actions tab |

The workflow uploads the contents of `src/` as a GitHub Pages artifact and deploys it.  
After the first successful run the site will be live at the configured GitHub Pages URL.

### Enabling GitHub Pages (one-time setup)

1. Go to **Settings → Pages** in the repository.
2. Under **Source**, choose **GitHub Actions**.
3. The custom domain `yordyturkey.com` is configured via the `src/CNAME` file.  
   Point your DNS to GitHub Pages as described in [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Coding Standards

- **HTML**: Semantic HTML5; always include `lang`, `alt`, `aria-label` where appropriate.
- **CSS**: Custom properties (CSS variables) for colours, spacing, and typography. BEM-style class names.
- **JS**: Vanilla ES5-compatible JavaScript; no frameworks. Code wrapped in an IIFE with `"use strict"`.
- **Accessibility**: Skip-link, ARIA roles, keyboard-navigable components.
- **Images**: Place new images in `src/assets/images/`. Use descriptive filenames and always provide `alt` text.

---

## Contact / Business Info

| | |
|---|---|
| Address | 2000 S. Main Street, Morton, IL 61550 |
| Phone | 309-263-2891 |
| Email | info@yordyturkey.com |
