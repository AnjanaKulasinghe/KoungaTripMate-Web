# KoungaTripMate Marketing Website

## Overview
This is the marketing website for KoungaTripMate, an offline-first group travel coordination app by Kounga Solutions.

**URL:** https://tripmate.koungasolutions.co.nz

## Features
- Modern, responsive design
- Mobile-first approach
- Beautiful gradient animations
- Complete legal pages (Privacy Policy & Terms of Service)
- Fast loading and performance optimized
- Accessible design
- SEO optimized
- Clean SVG icons (no emoji dependencies)

## Structure

```
website/
├── index.html          # Main landing page
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # JavaScript functionality
└── README.md          # This file
```

## Pages

### 1. Home Page (index.html)
- Hero section with app overview
- Features showcase (9 key features)
- How it works (3-step process)
- Testimonials
- Download section with app store buttons
- Footer with navigation

### 2. Privacy Policy (privacy.html)
Complete privacy policy covering:
- Information collection
- Data usage and storage
- Security measures
- User rights
- Compliance with NZ Privacy Act 2020

### 3. Terms of Service (terms.html)
Comprehensive terms covering:
- Service description
- User responsibilities
- Content ownership
- Liability limitations
- Dispute resolution

## Deployment

### Requirements
- Static file hosting (can use Firebase Hosting, Netlify, Vercel, or any web server)
- Domain configured: tripmate.koungasolutions.co.nz

### Deployment Options

#### Option 1: Firebase Hosting (Recommended)
```bash
# Install Firebase CLI if not already installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in the website directory
cd website
firebase init hosting

# Deploy
firebase deploy --only hosting
```

#### Option 2: Netlify
1. Connect your repository to Netlify
2. Set build directory to `website`
3. Deploy

#### Option 3: Traditional Web Server
1. Upload all files to your web server
2. Point tripmate.koungasolutions.co.nz to the website directory
3. Ensure server is configured to serve static files

### DNS Configuration
Set up the following DNS record:
```
Type: CNAME or A
Name: tripmate
Value: [Your hosting provider's address]
```

## Customization

### Updating Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary: #6366f1;
    --secondary: #ec4899;
    --accent: #14b8a6;
    /* ... more variables */
}
```

### Adding App Store Links
Update the download buttons in `index.html`:
```html
<a href="YOUR_GOOGLE_PLAY_URL" class="store-button google-play">
<a href="YOUR_APP_STORE_URL" class="store-button app-store">
```

### Updating Contact Information
Search and replace these email addresses:
- privacy@koungasolutions.co.nz
- support@koungasolutions.co.nz

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Optimized for fast loading
- Lazy loading for images
- Minimal external dependencies
- CSS animations with GPU acceleration

## SEO Considerations
- Semantic HTML5
- Meta descriptions on all pages
- Open Graph tags (can be added)
- Proper heading hierarchy
- Alt text for images (when added)
- Mobile-friendly
- Fast loading times

## Next Steps
1. Add actual app screenshots to replace mockups
2. Update app store links when available
3. Add Google Analytics or similar tracking
4. Implement contact form if needed
5. Add blog section for content marketing
6. Set up SSL certificate
7. Test on multiple devices and browsers

## Maintenance
- Regularly update privacy policy and terms as needed
- Keep app version number current
- Update testimonials with real user feedback
- Add new features to the features section as they're released

## Support
For questions or issues with the website:
- Email: support@koungasolutions.co.nz
- Website: https://tripmate.koungasolutions.co.nz

## License
© 2026 Kounga Solutions. All rights reserved.
