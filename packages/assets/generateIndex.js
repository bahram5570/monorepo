import fs from 'fs';
import path from 'path';

const assetDirs = ['images', 'icons', 'fonts'];
const srcDir = path.join(process.cwd(), 'src');
const outputFile = path.join(process.cwd(), 'index.ts');

let fileContent = ''

assetDirs.forEach((dir) => {
  const dirPath = path.join(srcDir, dir);
  const files = fs.readdirSync(dirPath);
  fileContent += `export const ${dir} = {\n`;

  files.forEach((file) => {
    const name = path.basename(file, path.extname(file)).replace(/[- ]/g, '_');
    fileContent += `  ${name}: require("./${dir}/${file}"),\n`;
  });

  fileContent += `};\n\n`;
});

fs.writeFileSync(outputFile, fileContent);
