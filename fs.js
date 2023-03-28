let fs = require('fs');
let path = require('path');
// let newFilePath  = path.join(__dirname,'text.text');
// console.log(newFilePath);
// fs.writeFileSync(newFilePath,"HI, I am ready");
//create file if not exist otherwise It overrides
// fs.writeFileSync(newFilePath,"I am writing again");
// let content = fs.readFileSync(newFilePath,'utf-8');
// console.log(content);

// fs.appendFileSync(newFilePath," updated now");
// console.log(fs.readFileSync(newFilePath,'utf-8'));

// let dirctoryPath = path.join(__dirname,'module');
// // console.log(dirctoryPath);
// // fs.mkdirSync(dirctoryPath);
// try {
//     if (!fs.existsSync(dirctoryPath)) {
//         fs.mkdirSync(dirctoryPath);
//     }
// } catch (err) {
//     console.error(err);
// }

// let content = fs.readdirSync(dirctoryPath);
// console.log(content);

// fs.mkdirSync("delete");
// fs.rmdirSync('delete');
let sourcePath = path.join(__dirname,'file.txt');
console.log(sourcePath);

let destinationPath = path.join(__dirname,'module','file.txt');
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);
