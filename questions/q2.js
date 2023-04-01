//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let path = require('path');
let fs = require('fs');
let arr = ['audio','video','image','software','documents','applications','other'];
let fileNames  = ['abc','def','egf','zue'];
let extension = ['.mp3','.mp4','.jpg','.exe','.pdf','.apk','.rar'];
// console.log(__dirname);
let organizePath = path.join(__dirname,"organize");
if(!fs.existsSync(organizePath))
    fs.mkdirSync(organizePath);
for(let i=0;i<arr.length;i++){
    let folderPath = path.join(organizePath,arr[i]);
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
    for(let j=0;j<fileNames.length;j++){
        let fileName = fileNames[j]+extension[i];
        let filePath = path.join(folderPath,fileName);
        fs.writeFileSync(filePath,"file has been created");
    }
}

