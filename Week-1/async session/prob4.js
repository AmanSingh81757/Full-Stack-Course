function isGreaterThanFive(numb){
    if(numb>5) return true;
    return false;
}

function filterArray(arr, callback){
    let ans = [];
    arr.foreach(isGreaterThanFive())
}

let arr = [2,3,4,5,6,7,8,9];
console.log(filterArray(arr, isGreaterThanFive));