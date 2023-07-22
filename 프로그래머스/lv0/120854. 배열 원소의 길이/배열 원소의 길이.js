function solution(strlist) {
    const strLength = [];
    for (const el of strlist){
        strLength.push(el.length);
    }
    return strLength;
}
/*
원소의 길이를 담은 새로운 배열 생성
배열 원소별로 length 값을 리턴해서 새 배열에 push
*/