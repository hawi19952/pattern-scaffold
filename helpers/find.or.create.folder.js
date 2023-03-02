module.exports = (folderPath) => {
  const fs = require('fs')
  try {
    if(!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  
    return folderPath
  } catch (error) {
    console.log('findOrCreateFolder error: \n', error);
  }
}