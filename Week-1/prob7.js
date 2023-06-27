const fs = require("fs");

function readFile(filePath){
    fs.readFile(filePath, 'utf-8', (err, data)=>{
        if(err) throw err;
        else return data;
    });
}

function writeFile(filePath, content){
    fs.writeFile(filePath, content, (err, data)=>{
        if(err) throw err;
    });
}

function series(){
    const aContent = readFile('a.txt');
    setTimeout(() => {

    }, 3000);
    writeFile('b.txt', aContent);
    let content = "";
    for(let i = 0;i<aContent.length-1;i++){
        if(aContent[i]===' ' && aContent[i+1]===''){
            continue;
        }
        else{
            content+=aContent[i];
        }
    }
    content+=aContent[aContent.length-1];

    writeFile('a.txt', content);
    
}