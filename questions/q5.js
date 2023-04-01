//move a file

let path = require('path');
let fs = require('fs');

let soucrcePath = path.join(__dirname,'..','unorganised','random.pdf');
// console.log(soucrcePath);

let destinationPath = path.join(__dirname,'organize','documents','random.pdf');
// console.log(destinationPath);

// fs.rename(destinationPath,soucrcePath,(err)=>{
// })

fs.copyFileSync(destinationPath,soucrcePath);
fs.unlinkSync(destinationPath);