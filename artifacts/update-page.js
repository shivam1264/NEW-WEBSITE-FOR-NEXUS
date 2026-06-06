const fs = require('fs');

const pagePath = 'c:\\SHIVAM UI WORK\\NEXUS WEBSITE\\app\\page.tsx';
const bentoPath = 'c:\\SHIVAM UI WORK\\NEXUS WEBSITE\\artifacts\\bento.tsx';

try {
  let pageContent = fs.readFileSync(pagePath, 'utf8');
  const bentoContent = fs.readFileSync(bentoPath, 'utf8');

  const lines = pageContent.split('\n');

  // Find the start index: `          <div className="bento-grid-3col">`
  const startIndex = lines.findIndex(line => line.includes('<div className="bento-grid-3col">'));

  // Find the end index: `{/* 6. TEAM PODS PREVIEW SECTION */}`
  const section6Index = lines.findIndex((line, idx) => idx > startIndex && line.includes('{/* 6. TEAM PODS PREVIEW SECTION */}'));
  
  // The end index should be 3 lines before section6Index
  const endIndex = section6Index - 3;

  if (startIndex !== -1 && section6Index !== -1) {
    // Splice out the old lines and insert the new ones
    lines.splice(startIndex, endIndex - startIndex + 1, bentoContent);
    fs.writeFileSync(pagePath, lines.join('\n'));
    console.log("SUCCESS: Replaced the bento grid section.");
  } else {
    console.error("ERROR: Indices not found", startIndex, section6Index);
  }
} catch(err) {
  console.error("ERROR:", err.message);
}
