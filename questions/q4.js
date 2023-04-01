// read content of unorganised folder and make  an array which has extension name of each file
let path = require('path');
let fs = require('fs');

let sourcePath = path.join(__dirname,'..','unorganised');
// console.log(sourcePath);
let filenames = fs.readdirSync(sourcePath);
let extensionName = [];
for(let filename of filenames){
    extensionName.push(path.extname(filename));
}
console.log(extensionName);