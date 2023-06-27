var sendObj={
    method: "GET"
}


function callback(result){
    result.json().then((response)=>console.log(response));
}
fetch("http://localhost:3000/handleSum?number=20", sendObj).then(callback)