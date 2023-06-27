const fs= require("fs");


function parallel(filePath1, filePath2, content){


    let ans = [];
    function readCallBack(err, data){
        if(err) {
            throw err;
        }
        ans[0] = data;
    }


    function writeCallBack(err, data){
        if(err){
            ans[1] = 0;
        }
        else ans[0]=1;
    }
    fs.readFile(filePath1, 'utf-8', readCallBack);
    fs.appendFile(filePath2, content, 'utf-8', writeCallBack);
    return ans;
}


const filePath1 = 'a.txt';
const filePath2 = 'b.txt';
const content = 'Hello world!!!!!';

console.log(parallel(filePath1, filePath2, content));