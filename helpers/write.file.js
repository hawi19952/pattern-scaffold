module.exports = (fileName, templatePath, destinationPath) => {
  const fs = require('fs');
  const findOrCreateFolder = require('./find.or.create.folder')
  const readFile = require('./read.file'); 
  
  const path = findOrCreateFolder(destinationPath)
  const templateScript  = readFile(templatePath);
  fs.writeFileSync(`${path}/${fileName}`, templateScript);
}