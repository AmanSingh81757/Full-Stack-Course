function printHelloWorld(){
    console.log("Hello World");
}

function higherOrder(callback){
    console.log("Inside of higher order function");
    callback();
}


higherOrder(printHelloWorld);
