function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

/*
루트계산
Math.sqrt() 제곱근 구하고 
Number.isInteger() 정수인지 확인
삼항연산자로 리턴

* Math.sqrt() 매개변수로 전달된 숫자의 제곱근을 반환
* Number.isInteger() 해당 숫자가 정수인지 확인, 불리언타입으로 반환

-----------------------> 정수확인 내장 메서드 없이 계산
1로 나누었을때 나머지 여부로 정수인지 판단가능

function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

*/