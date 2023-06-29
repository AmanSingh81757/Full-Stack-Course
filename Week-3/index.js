const fs = require('fs');

// function callback(err, data){
//     console.log(data);
// }


// using arrow function instead of traditional function
fs.readFile("a.txt", 'utf-8', (err, data)=>{
    console.log(data)
});