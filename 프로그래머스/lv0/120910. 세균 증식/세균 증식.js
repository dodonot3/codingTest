function solution(n, t) {
    let germsNum = 0;
    for(let i=0; i<t; i++){
        germsNum = n*2**t;
    }
    return germsNum;
}
/*
n이 2배씩 t만큼 제곱됨
*/