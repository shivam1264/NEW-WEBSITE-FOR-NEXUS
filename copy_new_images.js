const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\705b6fce-7647-4351-ae17-e6363aedf17a';
const destDir = 'c:\\SHIVAM UI WORK\\NEXUS WEBSITE\\public\\images';

const images = [
  { src: 'media__1780743127529.jpg', dest: 'project3_img1.jpg' },
  { src: 'media__1780743149311.jpg', dest: 'project3_img2.jpg' },
  { src: 'media__1780743162157.jpg', dest: 'project3_img3.jpg' },
  { src: 'media__1780743195152.jpg', dest: 'project3_img4.jpg' },
  { src: 'media__1780743234415.jpg', dest: 'project3_img5.jpg' }
];

try {
  for (const img of images) {
    fs.copyFileSync(path.join(srcDir, img.src), path.join(destDir, img.dest));
    console.log(`Copied ${img.dest}`);
  }
} catch (e) {
  console.error('Error copying:', e);
}
