# Grandpa Memorial Website

A simple, elegant, and responsive memorial website to honor the life and legacy of Mr. Joseph Ikemefune Azu (Joe Joe).

## Features

- **Hero Section:** Dignified introduction with a portrait and key highlights.
- **About Section:** Brief biography and timeline of Joseph Azu’s life and career.
- **Gallery:** Photo gallery and tribute page for sharing memories.
- **Burial Arrangements:** Clear schedule for all memorial events.
- **Audio Tribute:** Play a background song in remembrance.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Optimized Performance:** Combined and minified CSS, deferred JS, lazy-loaded images, and optimized font loading for fast page loads.

## Project Structure

```
grandpa/
├── index.html                # Main memorial page
├── scripts.js                # Audio and gallery functionality
├── media/                    # Images and audio files
│   ├── Bg.webp
│   ├── bg.m4a
│   ├── grandpa.webp
│   └── ...
├── pages/
│   ├── biography.html        # Full biography
│   └── gall&tri.html         # Gallery and tribute page
├── styles/
│   └── main.min.css          # Combined and minified CSS
└── README.md                 # Project documentation
```

## How to Use

1. **Clone or Download** this repository.
2. Open `index.html` in your browser to view the memorial page.
3. To customize:
   - Replace images in the `media/` folder.
   - Edit text in `index.html` and `pages/biography.html`.
   - Adjust colors and styles in `styles/main.min.css` (edit source CSS before minifying for easier changes).

## Performance Best Practices

- All CSS is combined and minified in `main.min.css` to reduce render-blocking requests.
- Fonts are loaded with `preconnect` and `display=swap` for faster rendering.
- JavaScript is loaded with `defer` to avoid blocking HTML parsing.
- Images use modern formats and lazy loading for optimal performance.

## Customization

- **Images:** Place your own images in the `media/` folder and update the `src` attributes in HTML.
- **Audio:** Replace `media/bg.m4a` with your preferred tribute song.
- **Colors:** Change CSS variables in the source CSS for a different theme.
- **Content:** Update biography, timeline, and gallery as needed.

## Credits

- Fonts: [Lato](https://fonts.google.com/specimen/Lato), [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) via Google Fonts.
- Built with HTML, CSS, and vanilla JavaScript.

---

**May his gentle soul rest in perfect peace.**