# 🧳 Travel Planner
 
> Complete trip planning in a single HTML file. Organize flights, hotels, itineraries, budgets, and documents — all saved locally.
 
## ✨ Features
 
- **Multi-trip management** with tabbed navigation
- **Interactive maps** with location markers and geocoding
- **Flight & transport tracking** with automatic duration calculation
- **Hotel management** with pricing and location data
- **Day-by-day itineraries** with timeline view
- **Multi-currency budget tracking**
- **PDF boarding pass uploads** and management
- **Calendar export** (ICS format for Google Calendar, Outlook, etc.)
- **Mobile-first responsive design**
- **Automatic & manual backups** via JSON export
- **Offline access** to all saved data
## 📥 Installation
 
### Web Server
Place `voyages.html` in your web root and access via browser.
 
### Local / Standalone
Simply double-click `voyages.html` or open with any modern browser (Chrome, Firefox, Safari, Edge).
 
**That's it!** No installation, build process, or server setup required.
 
---
 
## 🚀 Quick Start
 
### Create a Trip
1. Click **"New Trip"**
2. Enter destination, dates, and notes
3. Click **"Create"** — automatically saved
### Add Content
- **Flights:** Departure/arrival times, airline, price
- **Hotels:** Address, nightly rate, check-in/check-out dates
- **Transport:** Airplane, car, train, bus, boat, or bike with duration estimates
- **Places:** Restaurants, museums, attractions — pinned on interactive map
### View Itinerary
1. Click **"Itinerary"** tab
2. See all events organized by day
3. Click any location to view on map
### Export to Calendar
1. Click **"Save & Export"** menu
2. Select **"Export to Calendar"** (ICS format)
3. Import into Google Calendar, Outlook, Apple Calendar, or any calendar app
---
 
## 💾 Saving & Backup System
 
### Automatic Saving
All changes are saved instantly:
- **File System API** (primary) — direct save to disk
- **localStorage** (fallback) — automatic backup if File System unavailable
No manual action required. Your data is always safe.
 
### Manual Backup (JSON Export)
Create a complete backup file:
1. Click **"Save & Export"** menu
2. Select **"Export JSON"**
3. File saved to downloads folder
💡 **Tip:** Store backups safely. You can restore them anytime.
 
### Restore from Backup
Recover all trips from a saved backup:
1. Click **"Save & Export"** menu
2. Select **"Import JSON"**
3. Choose your backup file
4. All trips restored — existing data merged
### Calendar Export (ICS)
Export trips as a calendar file:
1. Click **"Save & Export"** menu
2. Select **"Export to Calendar"**
3. Includes all flights, hotels, attractions, and activities
4. Import into any calendar app
---
 
## 💡 Tips & Tricks
 
- **Address autocomplete:** Type city/street for suggestions
- **Interactive map:** Click any location to view on map
- **Mobile navigation:** Use hamburger menu (☰) for compact view
- **Fullscreen map:** Tap map icon on mobile to expand
- **Currency switch:** Change currency anytime — totals update automatically
- **Offline access:** View saved trips without internet
- **Share trips:** Export JSON and share backup files with travel companions
---
 
## 🎨 Design & Tech
 
**Design System:** Washi (cream) + Vermilion (red) + Kraft (brown)  
**Typography:** Fraunces (headings) + IBM Plex Sans (body)  
**Architecture:** Single-file HTML with inline CSS & JavaScript
 
**Technologies:**
- HTML5, CSS3, Vanilla JavaScript (ES6+)
- Leaflet.js for interactive maps
- PDF.js for document viewing
- Nominatim API for geocoding
**Zero critical dependencies** — works offline except for:
- Geocoding (requires internet)
- Maps (requires internet)
- PDF.js & Leaflet.js (loaded from CDN)
---
 
## 📱 Responsive Design
 
| Device | Layout |
|--------|--------|
| Mobile | Off-canvas sidebar, bottom-sheet dialogs, compact cards |
| Tablet | Sidebar visible, responsive grid |
| Desktop | Full UI, detailed views, side panels |
 
---
 
## 🔐 Privacy & Security
 
- **No server syncing** — all data stays on your device
- **No logins required** — complete privacy
- **Local storage only** — except external APIs (Nominatim, Leaflet, Google Maps)
⚠️ **Tip:** Don't store sensitive information (credit card numbers, passwords). Keep backups in a secure location.
 
---
 
## 🐛 Troubleshooting
 
**Data not saving?**
- Check File System API permission (granted on first use)
- Verify localStorage is enabled
- Open DevTools (F12) → Application → Storage
**Map not loading?**
- Check internet connection
- Verify Leaflet CDN is accessible
- Ensure GPS coordinates are valid
**Geocoding not working?**
- Check internet connection
- Nominatim may be rate-limited (wait a moment)
- Try different address format
---
 
## 📊 Roadmap
 
- [ ] Weather API integration
- [ ] Packing list tracker
- [ ] Daily journal and notes
 
## 📄 License
 
Free to use and modify for personal use.
 
---
 
**v1.0.0** • Lightweight • Local-first • No login required
 

