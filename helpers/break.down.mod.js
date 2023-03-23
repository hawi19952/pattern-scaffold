function removeEmptyLines(executablesArray) {
  const index = executablesArray.indexOf('\n');
  if( index > -1 ) {
    executablesArray.splice(index,1)
  }
  return executablesArray;
}



function renderOutput(output) {
  let string = [];
  string.push(output.moduleHeader)
  output.executables.forEach(line => string.push(line))
  string.push(output.moduleFooter)
  output.writableString = string.join('')
}

function writeFile(writableString) {
  const fs = require('fs');
  fs.writeFileSync('./module.js',writableString.toString(), "utf-8");
}

/**
 * give it a path, and let it add to it what you need it to do and then 
 * it will generate the output file on the path you decide
 * 
 * Read file => define path of file and formate, let's stick with JS for now
 * Segregate the file in organize manner => break it down into the interface { Imports & Dependencies , Header , Footer , Executables}
 * add the appended code
 * Render the file
 * Write it out => Decide on output path
 * 
 * If the file exists or it's a new one to be initiated will be different
 */ 

module.exports = (path) => {
  const fs = require('fs');
  const scriptText = fs.readFileSync(path, { encoding: "utf8"});

  const moduleHeaderIndex = scriptText.indexOf('{')+1
  const moduleFooterIndex = scriptText.lastIndexOf('}')

  const moduleHeader = scriptText.substring(0,moduleHeaderIndex);
  const moduleObject = scriptText.substring(moduleHeaderIndex, moduleFooterIndex);


  const moduleFooter = '\n}'
  const executablesArray = moduleObject.split(';');

  let executables = removeEmptyLines(executablesArray);
  executables.forEach((line, index) => {
    if(!line.includes(';')){
      executables[index] = line + ';'
    }
  })
  let output = {
    moduleHeader,
    executables,
    moduleFooter
  }
  executables.push('\n // this is a comment to test the insertion')

  renderOutput(output);
  //writeFile(output.writableString);
  return output
}