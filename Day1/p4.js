const fs = require('fs');
fs.readfile('./data.txt',"i am new fie",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})