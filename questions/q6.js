//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let path = require('path');
let fs = require('fs');

let forderPath = path.join(__dirname,'..','unorganised');
// console.log(forderPath);
let fileNames = fs.readdirSync(forderPath);
// console.log(folderNames);
for(let fileName of fileNames){
    if(path.extname(fileName)=='.mp3'){
        console.log('Audio file');
    }
}
