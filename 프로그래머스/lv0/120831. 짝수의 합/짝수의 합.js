function solution(n) {
    let evenSum = 0;
    for(let i = 1; i <= Math.floor(n / 2); i++ ){
        evenSum += 2 * i;
    }
    return evenSum;
}