# Course Builder - Race Course Layout Tool

A comprehensive tool for creating race course layouts for cycling and motor racing with full-featured capabilities:

- 🗺️ Satellite map (from Esri/Maxar)
- ✏️ Drag-to-adjust road edges
- 🚧 Place equipment (barriers, cones, CP points, etc.)
- 📸 Export PNG images with frame and legend
- 💾 Save/Load project files (JSON)
- 📂 Support GPX files
- ↩️ Undo/Redo functionality
- 🔗 Share via URL link
- ⚡ Excellent performance with caching
- 🛡️ Error handling and validation

## How to Use on GitHub Pages

### 1. Create Repository on GitHub
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it as desired (e.g., `course-builder`)
3. Select **Public** to allow anyone to access it

### 2. Upload Files
1. In the repository, upload the following files:
   - `index.html` (main file)
   - `README.md` (this file)
   - `README_EN.md` (English version)
   - `.gitignore`
   - `DEPLOY.md`

### 3. Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, select **Deploy from a branch**
3. Select branch: `main` (or `master`) and folder: `/ (root)`
4. Click **Save**

### 4. Wait and Access
- GitHub will provide the URL of your web app (e.g., `https://username.github.io/course-builder/`)
- Open the URL to start using immediately

## Main Features

### "Road" Tab
- **Drag to adjust edges**: Adjust road edges by dragging points individually or both sides simultaneously
- **Road size**: Adjust width, shift, and smoothness of the line
- **Section adjustments**: Set specific values for distance ranges (e.g., narrow curves need increased width)
- **Edge style**: Choose line patterns (kerb, white, yellow, tape)

### "Equipment" Tab
- **Place individually**: Click to place equipment on the map, drag to move, rotate, or delete
- **Place in line**: Automatically place equipment along the road edge
- **Selected item**: Edit rotation, add text labels, duplicate, delete
- **Supported equipment**: Hay bales, tire barriers, concrete barriers, water barriers, cones, Start/Finish, CP points, marshal points, chicanes, medical units, spectator areas, pit

### "Export" Tab
- **Save PNG image**: Create presentation-ready images with frame, north arrow, scale, and legend
- **Project file**: Save project as JSON to continue editing later
- **Share link**: Create URL link to share with others for instant access
- **Open GPX**: Load new routes from GPX files

### "Settings" Tab
- **Auto-save**: Enable/disable automatic saving to localStorage
- **App info**: View version and app information
- **Clear storage**: Clear all saved data from localStorage

### Additional Features
- **Undo/Redo**: Undo/Redo edits (Ctrl+Z / Ctrl+Y)
- **Auto-save**: Automatically save to localStorage
- **Responsive**: Supports both Desktop and Mobile
- **Performance**: Cache SVG data and images for speed
- **Validation**: Check files before loading to prevent errors

## Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari

## Keyboard Shortcuts
- `Ctrl+Z` - Undo
- `Ctrl+Y` - Redo
- `Esc` - Cancel equipment placement
- `Delete` / `Backspace` - Delete selected equipment
- `Double-click` on handle - Reset to default

## Usage Tips
1. **Getting started**: Load a GPX file of the desired route
2. **Adjust edges**: Use drag-to-adjust edges to match the actual road
3. **Place equipment**: Place barriers and CP points as needed
4. **Export**: Save PNG image with frame for presentation
5. **Share**: Use "Share link" button to send to your team

## Troubleshooting
- **Satellite map not loading**: Check internet connection
- **GPX won't load**: Verify GPX file is valid and contains route data
- **App running slow**: Reduce GPS points or use smaller GPX files
- **No undo/redo available**: Check if you've made any edits yet

## Development
If you want to modify or extend:
1. Fork this repository
2. Edit the `index.html` file
3. Commit and push to your repository
4. Open a Pull Request if you want to contribute back

## License
MIT License - Free for both commercial and personal use

## Credits
- Satellite imagery: Esri, Maxar, Earthstar Geographics
- Map library: Leaflet
- Fonts: Google Fonts (Chakra Petch, IBM Plex Sans Thai)
- Icons: Custom SVG icons

## Contact
If you encounter issues or have suggestions, please open an Issue on GitHub
