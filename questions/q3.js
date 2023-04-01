//Q. copy index.html file from module1 to a new folder inside module2 having name html.
// apne file k hisab se modify kiye hai file ko
let path = require('path');
let fs = require('fs');
// console.log(__dirname);

let sourcePath = path.join(__dirname,'..','unorganised','newd.doc');
console.log(sourcePath);

let destinationPath = path.join(__dirname,'organize','documents','newd.doc');
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);

