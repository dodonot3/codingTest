function solution(n) {
    let numArr = [];
    for (let a = 1; a <= n; a++){
        if(n % a === 0) numArr.push(a);
    }
    return [...new Set(numArr)].length;
}

/*
a와 b는 n의 약수(나머지가 0)
a와 b는 n보다 작다.

for 반복문으로, n을 a로 1부터 n까지 나눠서 
나머지가 0인 a를 새 배열에 push
배열의 길이 값을 반환

function solution(n) {
    let numArr = [];
    for (let a = 1; a <= n; a++){
        if(n % a === 0) numArr.push(a);
    }
    return [...new Set(numArr)].length;
}
*/