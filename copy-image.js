const fs = require('fs');
try {
  fs.copyFileSync("C:\\Users\\maury\\Downloads\\SUBHAM Resume.pdf", "c:\\SHIVAM UI WORK\\NEXUS WEBSITE\\public\\SUBHAM_Resume.pdf");
  console.log('Resume copied successfully');
} catch(e) {
  console.error(e);
}
