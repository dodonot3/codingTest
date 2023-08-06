function solution(x, n) {
    let list = [];
    let reset = 0;
    for(let i = 0; i < n; i++){ 
        reset += x;
        list.push(reset);
    }
    return list;
}
/*
필터와 맵을 사용해 하는 방법
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
*/