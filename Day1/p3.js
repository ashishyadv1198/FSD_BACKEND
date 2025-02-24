const fs= require('fs');
const dats=fs.readFileSync('./data.txt','utf-8');
console.log(dats);