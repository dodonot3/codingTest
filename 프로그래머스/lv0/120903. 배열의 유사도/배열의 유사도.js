function solution(s1, s2) {
    let count = 0;
    for(const str of s1){
        if(s2.includes(str)) count += 1;
    }
    return count;
}

/*
배열의 원소를 하나씩 받아서
다른 배열에 포함된 원소라면 카운트

function solution(s1, s2) {
    let count = 0;
    for(const str of s1){
        if(s2.includes(str)) count += 1;
    }
    return count;
}
*/