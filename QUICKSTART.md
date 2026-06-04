# Quick Start Guide

## 🚀 Running Your Portfolio Locally

Follow these steps to preview your e-portfolio on your computer before uploading to GitHub Pages.

---

## Option 1: Using Python (Easiest - No Additional Setup Required)

### On Windows:

1. Open PowerShell or Command Prompt
2. Navigate to your eportfolio folder:
   ```powershell
   cd "path\to\your\eportfolio"
   ```
3. Run one of these commands:
   ```powershell
   # If you have Python 3.x
   python -m http.server 8000
   
   # Or if Python 2.x
   python -m SimpleHTTPServer 8000
   ```
4. Open your browser and go to: **http://localhost:8000**
5. You should see your portfolio homepage!
6. To stop the server, press `Ctrl + C` in PowerShell

### On Mac/Linux:

1. Open Terminal
2. Navigate to your eportfolio folder:
   ```bash
   cd path/to/your/eportfolio
   ```
3. Run:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and go to: **http://localhost:8000**

---

## Option 2: Using VS Code Live Server (Visual Studio Code)

1. Install VS Code extension "Live Server" (by Ritwick Dey)
   - Open VS Code
   - Go to Extensions (Ctrl + Shift + X)
   - Search for "Live Server"
   - Click Install

2. Right-click on `index.html` and select **"Open with Live Server"**

3. Your default browser will automatically open with your portfolio

---

## Option 3: Using Node.js

1. Make sure Node.js is installed (download from nodejs.org)
2. Open Command Prompt/Terminal in your eportfolio folder
3. Install http-server:
   ```bash
   npm install -g http-server
   ```
4. Run:
   ```bash
   http-server
   ```
5. Open your browser to the URL shown (usually `http://127.0.0.1:8080`)

---

## Troubleshooting

### Port Already in Use
If you get an error that port 8000 is already in use, try another port:
```powershell
python -m http.server 8080
# Then visit http://localhost:8080
```

### Images Not Loading
- Make sure your image files are in the `images/` folder
- Check that filenames match exactly (case-sensitive on Mac/Linux)
- Use the exact filenames mentioned in the images/README.md

### Navigation Links Not Working
- Make sure you're accessing the site via localhost (http://localhost:8000)
- Not directly opening the HTML file in browser

---

## What to Test Locally

Before deploying to GitHub Pages, test:

✅ All navigation links work  
✅ Images load correctly  
✅ Responsive design (resize browser or test on phone)  
✅ Mobile menu hamburger works (on small screens)  
✅ Smooth scrolling works  
✅ Contact form validation works  

---

## Ready to Deploy?

Once you're happy with your local preview:

1. Place all files in your `your-username.github.io` repository
2. Push to GitHub
3. Visit `https://your-username.github.io` (wait a few minutes for GitHub Pages to process)

---

**Need help?** Check the README.md file for more detailed information!
