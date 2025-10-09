# Favicon Setup

## Status
All pages now reference `favicon.png` but the actual file needs to be created/added.

## Required File
- **Location:** `/images/favicon.png`
- **Size:** 32x32 pixels or 16x16 pixels (or both)
- **Format:** PNG with transparency

## How to Create

### Option 1: From Logo
If you have a logo that works well at small sizes:
1. Open the logo in an image editor
2. Resize to 32x32 pixels
3. Save as `favicon.png`
4. Place in `/images/` folder

### Option 2: Online Favicon Generator
1. Visit https://favicon.io/ or https://www.favicon-generator.org/
2. Upload your logo or create a text/emoji favicon
3. Download the generated favicon
4. Rename to `favicon.png`
5. Place in `/images/` folder

### Option 3: Use Existing Logo
You could also use the existing logo.jpg:
```bash
# Using ImageMagick or similar tool
convert images/logo.jpg -resize 32x32 images/favicon.png
```

## Current References
All HTML files already include:
```html
<link rel="icon" href="../images/favicon.png" type="image/png">
```

So once you add the `favicon.png` file to the images folder, it will automatically work on all pages!

## Note
The nicola-hemshorn.jpg file exists and could potentially be cropped/resized to create a favicon if appropriate.

