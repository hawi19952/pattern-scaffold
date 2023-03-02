module.exports = (templatePath) => {
  const fs = require('fs'); 
  try {
    const content = fs.readFileSync(templatePath, { encoding: "utf8"});
    return content;
  } catch (error) {
    console.log('readFile error: \n', error);
  }
}