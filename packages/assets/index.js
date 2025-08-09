import fs from 'fs';
import path from 'path';

const DIRECTORIES_LIST = ['../../apps/pwa/public/assets/shared'];

async function deleteDirectoryHandler(dir) {
  if (fs.existsSync(dir)) {
    await fs.promises.rm(dir, { recursive: true, force: true });
  }
}

async function copyAssetsHandler(src, dest) {
  const entries = await fs.promises.readdir(src, { withFileTypes: true });

  await fs.promises.mkdir(dest, { recursive: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyAssetsHandler(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

for (const appSharedPath of DIRECTORIES_LIST) {
  await deleteDirectoryHandler(appSharedPath);
  await copyAssetsHandler('./src', appSharedPath);
}
