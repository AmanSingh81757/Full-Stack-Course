const fs = require('fs');

function printData(data){
    console.log(data);
}

function readFileCallback(filePath, callback){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }
        callback(data);
      });
}

let filePath = 'a.txt';
readFileCallback(filePath, printData);