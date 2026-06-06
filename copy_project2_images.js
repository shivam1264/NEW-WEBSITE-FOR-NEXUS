const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\maury\\.gemini\\antigravity-ide\\brain\\705b6fce-7647-4351-ae17-e6363aedf17a';
const destDir = 'c:\\SHIVAM UI WORK\\NEXUS WEBSITE\\public\\images';

const images = [
  { src: 'media__1780745377678.jpg', dest: 'project2_img1.jpg' },
  { src: 'media__1780745407228.jpg', dest: 'project2_img2.jpg' },
  { src: 'media__1780745414993.jpg', dest: 'project2_img3.jpg' },
  { src: 'media__1780745423066.jpg', dest: 'project2_img4.jpg' },
  { src: 'media__1780745432526.jpg', dest: 'project2_img5.jpg' }
];

try {
  for (const img of images) {
    fs.copyFileSync(path.join(srcDir, img.src), path.join(destDir, img.dest));
    console.log(`Copied ${img.dest}`);
  }
} catch (e) {
  console.error('Error copying:', e);
}
