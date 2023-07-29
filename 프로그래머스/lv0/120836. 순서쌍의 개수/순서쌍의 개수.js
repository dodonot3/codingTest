function solution(n) {
    let numArr = [];
    for (let a = 0; a < n; a++){
        if(n % a === 0) numArr.push(a);
    }
   
    return [...new Set(numArr)].length + 1
}

/*
a와 b는 n의 약수(나머지가 0)
a와 b는 n보다 작다.

function solution(n) {
    let numArr = [];
    for (let i = 0; i < n; i++){
        n % a === 0 && n % b === 0
        && a <= n
        && b <= n
        && a * b === n
        numArr.push(a);
    } 
    return numArr.length;
}
*/