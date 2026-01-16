# Personal Portfolio Website

A modern, responsive personal portfolio website built for GitHub Pages.

## Features

- **About Page**: Showcase your background, skills, and interests
- **Experience Page**: Display your professional experience and projects
- **Awards Page**: Highlight your achievements and recognition
- **Publications Page**: Showcase your research papers and articles
- **Media Page**: Featured articles, research highlights, and press coverage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations

## Setup for GitHub Pages

### Step 1: Push to GitHub Repository

If you haven't already, push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/bmwelu12/bmwelu.io
2. Click on **Settings** (top right of the repository page)
3. In the left sidebar, scroll down and click on **Pages**
4. Under **Source**, select:
   - **Deploy from a branch**
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 3: Wait for Deployment

- GitHub will start building your site (usually takes 1-2 minutes)
- You'll see a green checkmark when deployment is complete
- A message will appear with your site URL

### Step 4: Access Your Site

Your site will be live at:
```
https://bmwelu12.github.io/bmwelu.io/
```

**Note:** If you see a 404 error, wait a few minutes for GitHub to finish building. You can check the deployment status in the **Actions** tab of your repository.

### Troubleshooting

- **Site not loading?** Check the **Actions** tab for any build errors
- **Changes not showing?** Make sure you've pushed your latest commits
- **Need a custom domain?** See GitHub's documentation on [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Customization

### Update Content

- **About Page** (`about.html`): Edit the about text, skills list, and add your photo
- **Experience Page** (`experience.html`): Add your work experience and projects
- **Awards Page** (`awards.html`): Add your awards and achievements
- **Publications Page** (`publications.html`): Add your research papers and articles

### Update Styling

- Edit `styles.css` to customize colors, fonts, and layout
- Color variables are defined at the top of the CSS file for easy customization

### Update Navigation

All pages have a consistent navigation menu. Update the links in the `<nav>` section of each HTML file.

### Add Your Photo

Replace the placeholder image in `about.html`:
```html
<div class="about-image">
    <img src="your-photo.jpg" alt="Your Name" style="width: 100%; max-width: 300px; border-radius: 10px;">
</div>
```

## File Structure

```
.
├── index.html          # Home page
├── about.html          # About page
├── experience.html     # Experience page
├── awards.html         # Awards page
├── publications.html   # Publications page
├── media.html          # Media & press page
├── styles.css          # Main stylesheet
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.
