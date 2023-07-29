function solution(my_string) {
    let numberStr = [...my_string].filter(el => !isNaN(el));
    // isNaN 숫자가 아니면 true 반환
    let sum = 0;
    for (const el of numberStr){
       sum += +el;
    }
    return sum;
}
/*
my_string 에서 number type만 filter
for of 자연수의 합 구하기

* typeof 연산자는 변수의 데이터 타입을 확인하는 용도로 사용. 
* 문자를 숫자와 비교할 때는, isNaN 사용. 숫자가 아니면 true 반환
*/