# ZipVoice Demo Website

A beautiful, interactive demo website showcasing ZipVoice's capabilities for Vietnamese voice adaptation, cross-language adaptation, and code-switching.

## Features

- **Introduction Section**: Overview of ZipVoice model and its key features
- **Vietnamese Voice Adaptation**: Zero-shot and few-shot demos for different Vietnamese accents and voices
- **Cross-Language Adaptation**: Demonstrations of voice adaptation across languages
- **Code-Switch Adaptation**: Real-world code-switching examples

## File Structure

```
demo/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # Interactive functionality
├── audio/              # Audio files (prompt and synthesized)
│   ├── *_prompt.wav   # Reference prompt audios
│   └── *_syn.wav      # Synthesized output audios
└── README.md           # This file
```

## How to Use

### Local Viewing

Simply open `index.html` in a web browser. All files are self-contained and work offline.

### Sharing Options

#### Option 1: GitHub Pages (Recommended)

1. Push the `demo/` folder to a GitHub repository
2. Go to repository Settings → Pages
3. Select the branch and folder containing the demo
4. Your site will be available at `https://username.github.io/repository-name/demo/`

#### Option 2: Netlify Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the entire `demo/` folder
3. Get an instant public URL

#### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to the demo folder: `cd demo`
3. Run: `vercel`
4. Follow the prompts to deploy

#### Option 4: Any Static Hosting

Upload the entire `demo/` folder to any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any web server

## Customization

- **Colors**: Edit CSS variables in `styles.css` (`:root` section)
- **Content**: Modify demo data in `script.js` (`demoData` object)
- **Layout**: Adjust grid layouts in `styles.css`

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Notes

- All audio files should be in the `audio/` subdirectory
- Audio files are loaded relative to the HTML file location
- The website is fully responsive and works on mobile devices

