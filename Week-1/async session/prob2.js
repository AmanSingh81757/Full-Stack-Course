function printHelloWorld(){
    console.log("Hello World");
}

function higherOrderAsync(callback){
    console.log(`starting here`);
    let time = new Date;
    let day = time.getDate();
    setTimeout(callback, day*1000);
    console.log("ending here");
}

console.log("before function");
higherOrderAsync(printHelloWorld);
console.log("after function");