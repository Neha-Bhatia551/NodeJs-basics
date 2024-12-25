const path = require('path')

const pathz = path.join('/content/','data','text.txt')
console.log(pathz);

const obsolutepath = path.resolve(__dirname,'/content/','data','text.txt');
console.log(obsolutepath);
const basename =  path.basename(obsolutepath)
console.log(basename)