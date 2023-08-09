function solution(my_string) {
    return my_string.split('').filter((v) => !isNaN(v)).map((v) => v*1).sort((a,b) => a-b);
}
/*
-------------------------- 숫자인지 확인할 때
filter((v)=> !isNaN(v)) 사용하여 숫자만 필터하였음

처음에 filter((v)=> Number(v))로 필터 했더니 0은 필터에 통과되지 않는 문제가 발생함.
0이 반환되지 않는 이유는, Number(v)는 0을 포함한 모든 숫자를 true로 변환하는데, 0은 falsy한 값이므로 filter는 0을 걸러내게 되기 때문이다.

-------------------------- string을 숫자로 타입변환 할때
1. 나는 암묵적 타입변환을 이용해서 1을 곱했음
map((v)=> v*1)

* parseInt()를 맵해서 숫자 타입변환
const stringArray = ['1', '2', '3', '4', '5'];
// parseInt를 사용하여 문자열을 숫자로 변환하고 새 배열 생성
const numberArray = stringArray.map(str => parseInt(str));
console.log(numberArray); // [1, 2, 3, 4, 5]


2. 그러나 챗gpt는 map을 이용해서 숫자로 타입변환하는 건 어색할 수 있다고 함

------------- for 반복문으로 새배열에 푸시하거나
const stringArray = ['1', '2', '3', '4', '5'];
const numberArray = [];

for (let i = 0; i < stringArray.length; i++) {
  numberArray.push(parseInt(stringArray[i]));
}

-------------- forEach해서 새 배열에 푸시하는 방법 추천
const stringArray = ['1', '2', '3', '4', '5'];
const numberArray = [];

stringArray.forEach(str => {
  numberArray.push(parseInt(str));
});
*/
