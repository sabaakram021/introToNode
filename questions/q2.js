//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let path = require('path');
let fs = require('fs');
let arr = ['audio','video','image','software','documents','applications','other'];
let extension  = ['.mp3','.mp4','.png','.exe','.doc','.zip','.pdf'];
// console.log(__dirname);
for(let folderName of arr){
    let folderPath = path.join(__dirname,folderName);
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
}

