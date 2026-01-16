# Personal Portfolio Website

A modern, responsive personal portfolio website built for GitHub Pages.

## Features

- **About Page**: Showcase your background, skills, and interests
- **Experience Page**: Display your professional experience and projects
- **Awards Page**: Highlight your achievements and recognition
- **Publications Page**: Showcase your research papers and articles
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations

## Setup for GitHub Pages

1. **Push to GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/bmwelu12/bmwelu.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. **Your site will be live at:**
   `https://bmwelu.github.io/bmwelu12/`

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
