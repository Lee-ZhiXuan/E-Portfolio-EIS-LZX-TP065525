# Lee Zhi Xuan - E-Portfolio

A modern, responsive e-portfolio website built with HTML5, CSS3, and vanilla JavaScript. Easily hosted on GitHub Pages.

## Features

- 📱 **Fully Responsive Design** - Works beautifully on all devices (mobile, tablet, desktop)
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📄 **Multi-page Layout** - Home page and dedicated Projects page
- ✨ **Interactive Elements** - Smooth scrolling, hover effects, mobile menu
- 🚀 **GitHub Pages Ready** - Easy deployment to GitHub Pages
- 📊 **Project Showcase** - Detailed project cards with images, descriptions, and tech tags
- 📧 **Contact Form** - Simple contact form (local validation only)

## Project Structure

```
eportfolio/
├── index.html              # Main portfolio page
├── projects.html           # Projects showcase page
├── css/
│   └── style.css          # All styling
├── js/
│   └── script.js          # Interactive functionality
├── images/                 # Your images (to be added)
│   ├── profile.jpg        # Your profile photo
│   ├── project-vlsi.jpg   # VLSI project image
│   ├── project-cmos.jpg   # CMOS project image
│   └── placeholder.jpg    # Placeholder for additional projects
├── README.md              # This file
└── .gitignore             # Git ignore file
```

## Getting Started

### Running Locally

1. **Using Python (Recommended)**
   ```bash
   # Navigate to your eportfolio directory
   cd path/to/eportfolio
   
   # Python 3.x
   python -m http.server 8000
   
   # Python 2.x
   python -m SimpleHTTPServer 8000
   ```
   Then open `http://localhost:8000` in your browser.

2. **Using Node.js**
   ```bash
   # Install http-server globally (if not already installed)
   npm install -g http-server
   
   # Run from your eportfolio directory
   http-server
   ```
   Then open the URL shown in your terminal.

3. **Using Live Server (VS Code)**
   - Install the "Live Server" extension in VS Code
   - Right-click `index.html` and select "Open with Live Server"

### Adding Your Content

1. **Profile Image**
   - Place your profile photo in `images/project.jpg`
   - Recommended size: 400x400px (square)
   - Supported formats: JPG, PNG, WebP

2. **Project Images**
   - Add project images to the `images/` folder
   - Name them appropriately (e.g., `project-vlsi.jpg`, `project-cmos.jpg`)
   - Recommended size: 800x600px or larger

3. **Editing Content**
   - Edit `index.html` to update your personal information
   - Edit `projects.html` to add more projects or modify existing ones
   - All content is easily editable in the HTML files

## Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #3498db;    /* Accent blue */
    --accent-color: #e74c3c;       /* Highlight red */
    --light-bg: #ecf0f1;           /* Light background */
}
```

### Adding New Sections

To add new content sections, follow the pattern in the HTML files:

```html
<section class="section-name">
    <div class="container">
        <h2>Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

### Adding More Projects

In `projects.html`, duplicate the `.project-card` block and update:
- Project title, date, and type
- Project image path
- Description and achievements
- Technology tags

## Deploying to GitHub Pages

### Method 1: Manual Upload (Your Preferred Method)

1. Create a new repository on GitHub named `your-username.github.io`
2. Commit your local eportfolio files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. Your portfolio will be live at `https://your-username.github.io`

### Method 2: Using GitHub Desktop or Web Interface

1. Upload all files to your `your-username.github.io` repository
2. Push/commit the changes
3. Wait a few minutes for GitHub Pages to build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Results

1. **Images**: Use optimized images (compress them before uploading) for faster loading
2. **Mobile Testing**: Test your portfolio on mobile devices before deploying
3. **Content**: Keep descriptions concise and impactful
4. **Updates**: Regularly update your projects and achievements

## Performance

- Lightweight (no dependencies required)
- Fast loading times
- Optimized CSS and JavaScript
- No external CDN dependencies required

## License

This portfolio template is open source. Feel free to customize it however you like!

## Contact

- Email: leezhixuan2003@gmail.com
- Phone: +60 19-662-1182
- LinkedIn: linkedin.com/in/zhixuan-lee78bb711a6/

---

Created with ❤️ - A professional e-portfolio for Computer Engineering
