function solution(my_string) {
    return [...my_string].reverse().join('');
}
/*
------------------------->
Array.prototype.reverse() 호출한 배열을 반전하고 원본 배열을 변형
    array.reverse()

Array.prototype.toReversed() 역순으로 정렬된 새로운 배열을 반환(ES2023 도입된 메서드)
원본 배열을 해치는 reverse() 메서드를 보완
*/