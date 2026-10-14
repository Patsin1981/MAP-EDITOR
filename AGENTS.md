# Map Editor - Project Settings

## Project Information
- **Name**: Map Editor
- **Type**: Single-page Web Application
- **Technology**: HTML, CSS, JavaScript (Vanilla)
- **Dependencies**: Leaflet (CDN), Google Fonts (CDN)

## File Structure
```
/
├── index.html          # Main application file (contains HTML, CSS, JS)
├── README.md           # Thai documentation
├── README_EN.md        # English documentation
├── DEPLOY.md           # Deployment guide
├── .gitignore          # Git ignore rules
└── AGENTS.md           # This file
```

## Development Commands

### Testing the App Locally
Since this is a static HTML file, you can test it by:
1. Double-click `index.html` to open in browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have http-server installed)
   npx http-server
   ```

### File Modifications
- **Main file**: `index.html` - Contains all code in one file
- **Do not split** into separate files unless necessary (keep it simple for GitHub Pages)
- **When editing**: Always read the file first before making changes

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in Settings
3. Deploy from branch: `main` or `master`
4. Folder: `/ (root)`

### Other Hosting
Can be deployed to any static hosting:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages (recommended)

## Configuration

### App Settings (in index.html)
Located in the STATE section of index.html:
```javascript
const state = {
  name: DEFAULT_NAME,
  track: DEFAULT_TRACK,
  width: 8,
  shift: 0,
  smooth: 10,
  style: "kerb",
  lw: 3.5,
  showCenter: false,
  showKm: true,
  sections: [],
  items: [],
  iconSize: 28,
  adjL: {},
  adjR: {},
  handleStep: 20,
  title: DEFAULT_NAME,
  subtitle: "ผังสนามแข่งขัน",
  autosave: true,  // Auto-save to localStorage
};
```

### Settings Tab
The app has a "ตั้งค่า" (Settings) tab with:
- **Auto-save toggle**: Enable/disable automatic saving to localStorage
- **App info**: Version, fonts, map provider
- **Clear storage**: Button to clear all saved data from localStorage

### Default Track
The default GPS track is defined in `DEFAULT_TRACK` constant at the top of the script section.

## Verification

After making changes:
1. Test locally by opening `index.html` in browser
2. Check console for errors (F12 → Console)
3. Test all features:
   - Load GPX files
   - Adjust road edges
   - Place equipment
   - Export PNG
   - Undo/Redo
   - Share link
4. Test on mobile (responsive design)

## Known Limitations
- Single file architecture (harder to maintain for large projects)
- No build process
- Depends on external CDNs (Leaflet, Google Fonts)
- LocalStorage size limit (~5MB)
- URL parameter length limit (~2000 characters for share links)

## Future Improvements
- Consider splitting into separate files if code grows too large
- Add unit tests
- Add PWA support for offline use
- Add more export formats (PDF, SVG)
- Add multi-language support (i18n)
