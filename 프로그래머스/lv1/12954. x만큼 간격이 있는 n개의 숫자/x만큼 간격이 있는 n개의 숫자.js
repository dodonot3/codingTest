function solution(x, n) {
    let list = [];
    let reset = 0;
    for(let i = 0; i < n; i++){ 
        reset += x;
        list.push(reset);
    }
    return list;
}
