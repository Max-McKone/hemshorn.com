# NetlifyCMS Setup Guide for Nicola Hemshorn Website

## What We've Done

✅ **Removed CushyCMS** completely  
✅ **Added NetlifyCMS** admin interface  
✅ **Created content management** for all three language versions  
✅ **Set up GitHub-based workflow** (no FTP needed!)

## Next Steps

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New Repository"
3. Name it `hemshorn.com`
4. Make it **Public** (required for GitHub Pages)
5. Upload all your website files

### 2. Enable GitHub Pages

1. In your repository, go to **Settings**
2. Scroll down to **Pages** section
3. Under "Source", select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"** folder
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/hemshorn.com`

### 3. Update NetlifyCMS Configuration

1. Edit `admin/config.yml`
2. Replace `max-mckone/hemshorn.com` with your actual GitHub username/repo
3. Commit the changes

### 4. Access the CMS

1. Go to `https://yourusername.github.io/hemshorn.com/admin/`
2. Click **"Login with GitHub"**
3. Authorize NetlifyCMS to access your repository
4. Start editing content!

## How Your Client Will Use It

1. **Visit** `https://yourusername.github.io/hemshorn.com/admin/`
2. **Login** with their GitHub account (you can add them as collaborators)
3. **Select a page** to edit (German, English, or Spanish)
4. **Make changes** in the simple interface
5. **Save** - changes automatically go live!

## Content Areas You Can Edit

### **Hero Section (Carousel)**
- Quote 1, 2, 3 (the main headlines)
- Text 1, 2, 3 (the descriptions under each quote)

### **Main Content**
- All 4 paragraphs in the main content area
- Contact information (phone and email)

### **Multi-Language Support**
- Separate editing for German, English, and Spanish versions
- Each language has its own content fields

## Benefits Over CushyCMS

✅ **No FTP server needed** - works directly with GitHub  
✅ **Version control** - see all content changes in history  
✅ **Better interface** - more user-friendly than CushyCMS  
✅ **Free forever** - no monthly fees  
✅ **Automatic backups** - GitHub keeps all your content safe  
✅ **Multiple editors** - add team members easily  
✅ **Preview changes** - see what content will look like before publishing  

## Adding Your Client as Editor

1. Go to your GitHub repository
2. Click **Settings** → **Manage access**
3. Click **Invite a collaborator**
4. Enter your client's GitHub username
5. Give them **"Write"** access
6. They can now edit content through the CMS!

## Support

- NetlifyCMS Documentation: [netlifycms.org/docs](https://www.netlifycms.org/docs/)
- GitHub Pages Help: [docs.github.com/pages](https://docs.github.com/en/pages)

---

**Ready to deploy?** Upload your files to GitHub and enable Pages hosting!
