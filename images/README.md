# Images Directory

This folder contains all the images for your e-portfolio.

## Required Images

### 1. **profile.jpg** (Your Profile Photo)
- Recommended size: 400x400px (square)
- Formats: JPG, PNG, or WebP
- Should be a professional headshot or portrait
- Will appear as a circular image in the hero section

### 2. **project-vlsi.jpg** (VLSI Design Project)
- Recommended size: 800x600px or 16:9 aspect ratio
- Formats: JPG, PNG, or WebP
- Suggested content: Schematic diagrams, layout images, or results/charts

### 3. **project-cmos.jpg** (CMOS Characteristics Project)
- Recommended size: 800x600px or 16:9 aspect ratio
- Formats: JPG, PNG, or WebP
- Suggested content: Graph plots, simulation results, or design visualization

### 4. **placeholder.jpg** (Future Projects)
- Recommended size: 800x600px or 16:9 aspect ratio
- Use this for any additional projects you want to add

## Image Optimization Tips

1. **Compression**: Compress images before uploading to reduce file size
   - JPG quality: 75-85% for best balance
   - Use tools like TinyPNG, ImageOptim, or Adobe Compress

2. **Format Selection**:
   - Use JPG for photographs and complex images
   - Use PNG for graphics with transparency
   - Use WebP for modern browsers (with JPG fallback)

3. **Dimensions**:
   - Keep image width under 1200px
   - Maintain consistent aspect ratios for project images
   - Profile image should be square

## Tools for Image Editing/Optimization

- **Online**: TinyPNG, Compressor.io, ImageMinifier
- **Desktop**: 
  - GIMP (free)
  - PhotoShop
  - Lightroom
  - Paint.NET (free for Windows)
  - ImageMagick (command line)

## Adding Images

Simply add your images to this folder and update the image paths in:
- `index.html` - for profile image path
- `projects.html` - for project images paths

Example:
```html
<img src="images/profile.jpg" alt="Lee Zhi Xuan">
<img src="images/project-vlsi.jpg" alt="VLSI Design Project">
```

---

**Note**: All image references in the HTML files are already set up with the correct paths. Just add your images with the recommended filenames!
