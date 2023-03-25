let fs = require('fs');
let path = require('path');
let newFilePath  = path.join(__dirname,'text.text');
console.log(newFilePath);
// fs.writeFileSync(newFilePath,"HI, I am ready");
//create file if not exist otherwise It overrides
fs.writeFileSync(newFilePath,"I am writing again");