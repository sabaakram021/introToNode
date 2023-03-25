// "C:\Users\HP\Desktop\fjp-dev\introToNode\path.js"
let path = require('path');
// console.log(path);
// let extensionName = path.extname("C:\Users\HP\Desktop\fjp-dev\introToNode\path.js");
// console.log(extensionName);
let baseName = path.basename(__filename);
// console.log(baseName);
let dirPath = __dirname;
// console.log(path.basename(dirPath));
// console.log(__filename);
// console.log(__dirname);
let newFilePath = path.join(dirPath,"text.js");
console.log(newFilePath);
