const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');  // bosy parser is an external middleware used npm install bosy parser to use it



// function middleWare1(req, res, next){
//     console.log(`from inside middleware `,req.headers.number);
//     next();
// }
// app.use(middleWare1);

app.use(bodyParser.json()); // we can use the body to send data to backend by using this line

// middleware is registered/used in this way
// middleware is a function jiske through saare request hoke gujarte hai
// middleware has access to req objec res object and we pass a next function which is executed if some condition is true
// else we we can not execute the request and throw some error or respond with some error

function counter(n){
    let ans = 0;
    for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans;
}
function mul(n){
    let ans = 1;
    for(let i=1;i<=n;i++){
        ans*=i;
    }
    return ans;
}
function handleFirstRequest(req, res){
    let number  = req.query.number;  // query parameter method
    // let number = req.headers.number; // header method
    // console.log(req.headers);
    // console.log(req.body);
    // let number = req.body.number;  // body mehtod (mostly used)
    let count = counter(number);
    // res.status(404).send(`answer is ${count}`);
    // we can also send status code
    var answerObject = {
        sum: count,
    }
    res.send(answerObject);
}

function handleFirstRequest1(req, res){
    // we only return answer for numbers less than 10000
    console.log(req.body.number);
    let number  = req.body.number;
    if(number<=10000){
        res.send(`answer is ${counter(number)}`);
    }
    else res.status(411).send('Big number chota number bhejo')
}

function handleFirstRequest2(req, res){
    console.log(req.body.number);
    let sums = counter(req.body.number);
    let mult = mul(req.body.number);
    var answerObject = {
        num: req.body.number,
        sum: sums,
        mul: mult,
    }
    res.send(answerObject);
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

function getPage(req, res){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello</title>
    </head>
    <body>
        <b>hi hello</b>
    </body>
    </html>`);
}
app.get('/handleSum', handleFirstRequest)
app.get('/palindrome', handlePalindrome);
app.get('/', getPage);
function started(){
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started)

