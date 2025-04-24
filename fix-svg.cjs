const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "src", "assets");

function updateSVGContent(svgContent) {
  return svgContent
    .replace(/fill="[^"]*"/gi, 'fill="currentColor"')
    .replace(/stroke="[^"]*"/gi, 'stroke="currentColor"');
}

function processDirectory(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath); // recursively process folders
    } else if (path.extname(fullPath) === ".svg") {
      const original = fs.readFileSync(fullPath, "utf8");
      const updated = updateSVGContent(original);

      fs.writeFileSync(fullPath, updated, "utf8");
      console.log(`✅ Updated: ${file}`);
    }
  });
}

processDirectory(iconsDir);
