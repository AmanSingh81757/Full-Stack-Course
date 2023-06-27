function double(element){
    return element*2;
}

function mapArray(arr, callback){
    let ans = arr.map(callback);
    return ans;
}


let arr = [1,2,3,4];
let ans = mapArray(arr,double);
console.log(ans);