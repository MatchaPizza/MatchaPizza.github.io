const BlurHash = require('./blurhash-module');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp')

const ENABLE_PUBLIC_IMAGE_ENCODING = true;
const ENABLE_PROJECT_ENCODING = false;
const ENABLE_KEYBOARD_ENCODING = false;

const getImageInfo = (filePath) => new Promise((resolve, reject) => {
  sharp(filePath)
    .resize({width: 240, height: 180})
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
      resolve({ pixels: Uint8ClampedArray.from(data), info });
    })
    .catch(reject);
});

if (ENABLE_PUBLIC_IMAGE_ENCODING) {
  const IMAGE_DIR = './public/images/';

  const files = fs.readdirSync(IMAGE_DIR, { withFileTypes: true });
  files.forEach(async (file) => {
    if (file.isFile()) {
      const filePath = path.join(IMAGE_DIR, file.name);
      const { pixels, info } = await getImageInfo(filePath);
      const hash = await BlurHash.encode(pixels, info.width, info.height, 4, 3);
      console.log(`${filePath}: [${hash}], width: ${info.width}, height: ${info.height}`);
    }
  });
}

// project json
if (ENABLE_PROJECT_ENCODING) {
  const PROJECT_DIR = './public/projects/';
  const PROJECT_IMAGE_DIR = path.join(PROJECT_DIR, 'images');

  const projectFiles = fs.readdirSync(PROJECT_DIR, { withFileTypes: true });
  projectFiles.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.join(PROJECT_DIR, file.name);
      fs.readFile(filePath, 'utf-8', async (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const jsonData = JSON.parse(data);
        if (jsonData.image && jsonData.image.path) {
          const imageFilePath = path.join(PROJECT_IMAGE_DIR, jsonData.image.path);
          console.log(`decoding ${jsonData.image.path} ${imageFilePath}`);
          const { pixels, info } = await getImageInfo(imageFilePath);
          const hash = await BlurHash.encode(pixels, info.width, info.height, 4, 4);
          jsonData.image = {
            path: jsonData.image.path,
            hash: hash,
            originalWidth: info.width,
            originalHeight: info.height,
          };

          fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf-8', (err) => {
            if (err) console.error(err);
          });
        }
      });
    }
  });
}

// custom keyboard json
if (ENABLE_KEYBOARD_ENCODING) {
  const KEYBOARD_DIR = './public/custom-keyboards/';
  const KEYBOARD_IMAGE_DIR = path.join(KEYBOARD_DIR, 'images');

  const customKeyboardFiles = fs.readdirSync(KEYBOARD_DIR, { withFileTypes: true });
  customKeyboardFiles.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.join(KEYBOARD_DIR, file.name);
      fs.readFile(filePath, 'utf-8', async (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const jsonData = JSON.parse(data);
        if (jsonData.images) {
          console.log(`decoding ${filePath} ...`);
          const encodedImages = jsonData.images.filter(image => !!image.hash);
          const unencodedImages = jsonData.images.filter(image => !image.hash);
          const imageInfoPromises = unencodedImages.map(image => getImageInfo(path.join(KEYBOARD_IMAGE_DIR, image.path)));
          const imageInfos = await Promise.all(imageInfoPromises);
          const encodedHashPromises = imageInfos.map((imageInfo) => BlurHash.encode(imageInfo.pixels, imageInfo.info.width, imageInfo.info.height, 4, 4));
          const encodedHashs = await Promise.all(encodedHashPromises);

          for (let i = 0; i < unencodedImages.length; i++) {
            encodedImages.push({
              path: unencodedImages[i].path,
              hash: encodedHashs[i],
              originalWidth: imageInfos[i].info.width,
              originalHeight: imageInfos[i].info.height,
            });
          }
          jsonData.images = encodedImages;

          fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf-8', (err) => {
            if (err) console.error(err);
          });
        }
      });
    }
  });
}
