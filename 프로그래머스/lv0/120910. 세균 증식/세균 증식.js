function solution(n, t) {
    return n * Math.pow(2, t);
}
/*
n이 2배씩 t만큼 제곱됨

function solution(n, t) {
    let germsNum = 0;
    for(let i=0; i<t; i++){
        germsNum = n*2**t;
    }
    return germsNum;
}

----------------> Math.pow() 사용
Math.pow(base, exponent)
    base 에 exponent를 제곱한 값을 반환합니다.
    
function solution(n, t) {
    return n * Math.pow(2, t);
}

*/