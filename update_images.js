const fs = require('fs');

let content = fs.readFileSync('d:\\\\html project\\\\2026-html-project\\\\Ill-Studio\\\\index.html', 'utf8');

// Replace all remaining instances of loading="lazy"> with fetchpriority="low" loading="lazy">
content = content.replace(/alt="image"  loading="lazy">/g, 'alt="image" fetchpriority="low" loading="lazy">');

fs.writeFileSync('d:\\\\html project\\\\2026-html-project\\\\Ill-Studio\\\\index.html', content);
console.log('Updated all images with fetchpriority');