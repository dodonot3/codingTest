function solution(strlist) {
    return strlist.map(el => el.length);
}
/*
원소의 길이를 담은 새로운 배열 생성
배열 원소별로 length 값을 리턴해서 새 배열에 push

function solution(strlist) {
    const strLength = [];
    for (const el of strlist){
        strLength.push(el.length);
    }
    return strLength;
}

------> map()메서드 사용하기 : 호출 배열의 모든 요소에서 제공된 함수를 호출한 결과로 채워진 새 배열을 만듦

function solution(strlist) {
    return strlist.map(el => el.length);
}

*/