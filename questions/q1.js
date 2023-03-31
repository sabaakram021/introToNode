//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let path = require('path');
let fs = require('fs');

// let dirctoryPath = __dirname;
// console.log(dirctoryPath);
if(!fs.existsSync("new_folder")){
    fs.mkdirSync("new_folder");
}
let pathofTextFile = path.join(__dirname,'new_folder','newFile.txt');
// console.log(pathofTextFile);
fs.writeFileSync(pathofTextFile,"new file has been made");

