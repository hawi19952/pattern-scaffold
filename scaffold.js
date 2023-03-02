const fs = require('fs');
const { findOrAddPackage, writeFile, readPackageJson, addEntryPoint} = require('./helpers/index');

const projectPath = '.';
const templatesPath = `${__dirname}/templates`;
const helpersPath = `${projectPath}/helpers`;
const initPath = `${projectPath}/initializers`;
const envPath = `${projectPath}/env`;
const modulesPath = `${projectPath}/modules`


/**
 * initializers roadmap
 * make sure environment exists
 * add helpers if needed
 * append init index
 * add package to package.json 
 * */  

function writeExpressFiles() {
  writeFile('default.env', `${templatesPath}/env/default.env`, envPath);
  writeFile('init.env.js', `${templatesPath}/initializers/init.env.js`, initPath);
  writeFile('init.express.js', `${templatesPath}/initializers/init.express.js`, initPath);
  writeFile('index.js', `${templatesPath}/initializers/index.js`, initPath);
  writeFile('server.js', `${templatesPath}/server.js`, projectPath);
}

function updateInitWithFunction () {
  
}

function initDefaultModule() {
  // Global Modules Initializer
  writeFile('index.js', `${templatesPath}/modules/index.js`, modulesPath);

  // Controllers
  writeFile('get.default.js',`${templatesPath}/modules/default/controllers/get.default.js`, `${modulesPath}/default` )
  writeFile('index.js',`${templatesPath}/modules/default/controllers/index.js`, `${modulesPath}/default` )
  
  // Functions
  writeFile('default.function.js',`${templatesPath}/modules/default/functions/default.function.js`, `${modulesPath}/default` )

  // Routes
  writeFile('default.routes.js', `${templatesPath}/modules/default/default.routes.js`, `${modulesPath}/default`)
}

function writeExpressInit () {
  const packages = ['express', 'cors', 'dotenv'];
  packages.forEach(package => {
    findOrAddPackage(package)
  });

  writeExpressFiles();
  addEntryPoint();
}


function generate() {
  //initProject(); ==> useless now
  writeExpressInit();
  readPackageJson();

  console.log('Done initiating the project, go ahead and use npm i then run the project');
}

//generate();
const logger = (string) => {
  console.log(string);
}

module.exports = {generate};