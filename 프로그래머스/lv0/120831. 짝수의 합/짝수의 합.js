function solution(n) {
    let result = 0;
    for(let i = 1; i <= n/2; i++ ){
        result = result + (2 * i);
    }
    return result;
}