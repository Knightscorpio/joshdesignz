const fs = require('fs');
const path = require('path');

// The base directory where images are stored
const imagesDir = path.join(__dirname, 'public', 'images');

// Function to recursively get all files with .png and .jpg extensions
function getAllImageFiles(dir, base = '') {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relativePath = base ? path.join(base, item.name) : item.name;
    
    if (item.isDirectory()) {
      results = results.concat(getAllImageFiles(fullPath, relativePath));
    } else if (/\.(png|jpg|jpeg|gif|svg)$/i.test(item.name)) {
      results.push({
        folder: base || '',
        filename: item.name,
        fullPath: `/images/${relativePath.replace(/\\/g, '/')}`
      });
    }
  }
  return results;
}

// Run the scan
const imageFiles = getAllImageFiles(imagesDir);

console.log('\n=== ALL IMAGE FILES FOUND ===\n');
if (imageFiles.length === 0) {
  console.log('No images found in public/images/');
  console.log('Make sure you have copied the assets into public/images/');
} else {
  // Group by folder for clarity
  const grouped = {};
  imageFiles.forEach(file => {
    const folder = file.folder || 'root';
    if (!grouped[folder]) grouped[folder] = [];
    grouped[folder].push(file);
  });

  Object.keys(grouped).sort().forEach(folder => {
    console.log(`\n📁 ${folder}/`);
    grouped[folder].forEach(file => {
      console.log(`   ${file.filename}`);
    });
  });

  console.log('\n=== FULL PATHS (for projects.js) ===\n');
  imageFiles.forEach(file => {
    console.log(`"${file.fullPath}"`);
  });
}

console.log(`\nTotal images found: ${imageFiles.length}`);