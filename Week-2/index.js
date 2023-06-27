const express = require('express')
const app = express()
const port = 3000

function counter(n){
    let ans = 0;
    for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans;
}
function handleFirstRequest(req, res){
    // let number  = req.query.number;
    let number = req.headers.number;
    console.log(req.headers);
    let count = counter(number);
    res.send(`answer is ${count}`);
}



function isPalindrome(s){
    let str = s.split('').reverse().join('');
    if(s===str) return true;
    return false;
}
function handlePalindrome(req, res){
    let string = req.query.str;
    let ans = isPalindrome(string);
    console.log(ans);
    res.send(`the string is ${ans==true?'':'not'} a plaindrome`);
}


app.post('/handleSum', handleFirstRequest)
app.get('/palindrome', handlePalindrome);

function started(){
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started)

