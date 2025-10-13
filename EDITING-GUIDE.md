# 📝 How to Edit Your Website Content

## For Nicola - Simple Content Editing Guide

Your website is hosted on GitHub, which means you can edit it directly in your web browser. No technical knowledge needed!

---

## 🌐 **Quick Start: 3 Steps to Edit Any Page**

### **Step 1: Go to Your Website Files**
1. Open your web browser
2. Go to: `https://github.com/max-mckone/hemshorn.com`
3. Log in with your GitHub account

### **Step 2: Find the File You Want to Edit**

Your website is organized by language:
- **German pages**: Click the `de/` folder
- **English pages**: Click the `en/` folder
- **Spanish pages**: Click the `es/` folder

Then click on the page you want to edit:
- `index.html` = Homepage
- `coaching.html` = Coaching page
- `training.html` = Training page
- `kontakt.html` or `contact.html` = Contact page
- etc.

### **Step 3: Make Your Changes**
1. Click the **pencil icon** (✏️) in the top right that says "Edit this file"
2. Make your changes in the text editor
3. Scroll down to the bottom
4. Click the green **"Commit changes"** button
5. Click **"Commit changes"** again in the popup
6. **Done!** Your changes will be live in 30-60 seconds

---

## 💡 **What You Can Safely Edit**

### ✅ **Safe to Edit (Text Content):**

Look for text between `>` and `<`:

```html
<h1>This text is safe to edit</h1>
<p>You can change this paragraph too</p>
<a href="coaching.html">Change this link text</a>
```

### ⚠️ **Don't Change (Code Stuff):**

Don't edit things that look like:
- `<div class="...">` ← Leave this alone
- `href="..."` ← Leave the quotes alone (but you can change what's inside)
- `<img src="...">` ← Leave this alone
- Anything with `{` or `}` or `;`

---

## 📞 **Common Editing Tasks**

### **Change Your Phone Number:**

Find this line:
```html
<a href="tel:+491717701402" class="phone">📞 +49 (0) 171 770 14 02</a>
```

Change the numbers in **both places** (keep the format the same):
```html
<a href="tel:+491234567890" class="phone">📞 +49 (0) 123 456 7890</a>
```

### **Change Your Email:**

Find:
```html
<a href="mailto:develop@hemshorn.com" class="email">✉️ develop@hemshorn.com</a>
```

Change to your new email in **both places**:
```html
<a href="mailto:newemail@hemshorn.com" class="email">✉️ newemail@hemshorn.com</a>
```

### **Change a Headline:**

Find:
```html
<h2 class="hero-title">Your Current Headline</h2>
```

Just change the text between `>` and `</`:
```html
<h2 class="hero-title">Your New Amazing Headline</h2>
```

### **Change a Paragraph:**

Find:
```html
<p>Your current paragraph text here.</p>
```

Replace the text:
```html
<p>Your new paragraph text goes here.</p>
```

---

## 🔄 **Undoing Changes (If You Make a Mistake)**

Don't worry! GitHub saves everything. If you make a mistake:

1. Go to your file
2. Click **"History"** button at the top right
3. Find the version before your mistake
4. Click the **`<>`** button (View file at this point)
5. Click the pencil icon to edit
6. Copy the good content
7. Go back to the current file and paste it in
8. Commit the changes

## 🖼️ **Adding or Changing Images**

### To add a new image:

1. Go to the `images/` folder in GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag your image into the box
4. Click **"Commit changes"**

### To use the image on your page:

```html
<img src="../images/your-new-image.jpg" alt="Description">
```

**Image Tips:**
- Use `.jpg` for photos
- Use `.png` for logos or graphics
- Keep images under 1MB for fast loading
- Name files without spaces: `my-photo.jpg` not `my photo.jpg`

---

## 🌍 **Editing in All Three Languages**

When you change content, remember to update all three language versions:

1. Edit `de/index.html` (German)
2. Edit `en/index.html` (English)
3. Edit `es/index.html` (Spanish)

This keeps your website consistent across languages.

---

## 📱 **Can I Edit on My Phone?**

Yes! The GitHub website works on mobile:
1. Open Safari or Chrome on your phone
2. Go to github.com
3. Navigate to your file
4. Tap the pencil icon
5. Edit and commit

(It's easier on a computer, but mobile works in a pinch!)

## 📋 **Quick Reference Card**

| Task | File to Edit |
|------|--------------|
| Change German homepage | `de/index.html` |
| Change English homepage | `en/index.html` |
| Change Spanish homepage | `es/index.html` |
| Update coaching page (DE) | `de/coaching.html` |
| Update contact info | All files with phone/email |
| Add new image | Upload to `images/` folder |

---

