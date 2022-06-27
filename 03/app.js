var anonymousFunction = function (num) {
    let result = 0; 
    for(let i=1; i<=num; i++) {
        result= result + i
     }
 return result   
}

const res = anonymousFunction(6);

console.log(res)