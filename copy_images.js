const fs = require('fs');

try {
  fs.copyFileSync('C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\11742f3f-6452-452b-8c13-29517c5bb267\\media__1780599995706.png', 'public/images/principle-1.png');
  fs.copyFileSync('C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\11742f3f-6452-452b-8c13-29517c5bb267\\media__1780600014584.png', 'public/images/principle-2.png');
  fs.copyFileSync('C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\11742f3f-6452-452b-8c13-29517c5bb267\\media__1780600024410.png', 'public/images/principle-3.png');
  console.log('Images copied successfully.');
} catch (e) {
  console.error('Error copying images:', e);
}
