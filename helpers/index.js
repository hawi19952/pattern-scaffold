const fs = require('fs');

// function updatePackageJson() {

//}

const packagesRepo = {
  cors: "^2.8.5",
  dotenv: "^16.0.3",
  nodemon: "^2.0.20",
  express: "^4.18.2"
}

function readPackageJson () {
  const data = fs.readFileSync('./package.json', {encoding: "utf8"});
  if(!data) {
    throw Error('Could not read package.json')
  }
  return JSON.parse(data);
}

function addPackage (packageObject, packageToAddName) {
  let updatedPackages = packageObject;
  updatedPackages.dependencies[packageToAddName] = packagesRepo[packageToAddName] 
  fs.writeFileSync('./package.json', JSON.stringify(updatedPackages));
}

function findOrAddPackage (packageName) {
  let packages = readPackageJson();
  
  if(!packages.dependencies) {
    packages.dependencies = {};
  }
  if(!packages.dependencies[packageName]) {
    addPackage(packages, packageName);
    console.log('package has been added');
    return;
  }
  console.log('package exists');
  return;
}

function addEntryPoint () {
  let packages = readPackageJson();
  const command = 'start:default'
  if(!packages.scripts[command]) {
    packages.scripts[command] = "NODE_ENV=default node ./server.js"
    fs.writeFileSync('./package.json', JSON.stringify(packages));
    console.log('Added project default entrypoint');
    return
  }
  console.log('Project entrypoint exists before');
  return
}

module.exports = {
  findOrCreateFolder: require('./find.or.create.folder'),
  readFile: require('./read.file'),
  writeFile: require('./write.file'),
  addPackage,
  findOrAddPackage,
  readPackageJson,
  addEntryPoint
}