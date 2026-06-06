const fs = require('fs');
const path = require('path');

const directories = ['app', 'components', 'artifacts'];

function walkDir(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

let allFiles = [];
directories.forEach(dir => {
    allFiles = allFiles.concat(walkDir(path.join(__dirname, dir)));
});

allFiles.push(path.join(__dirname, 'next.config.ts'));

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace "Indore" with "Bhopal"
    // Handle case sensitivity nicely
    content = content.replace(/Indore/g, 'Bhopal');
    content = content.replace(/indore/g, 'bhopal');
    content = content.replace(/INDORE/g, 'BHOPAL');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
console.log('Done');
