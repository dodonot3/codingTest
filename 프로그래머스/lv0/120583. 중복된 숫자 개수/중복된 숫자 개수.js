function solution(array, n) {
    let count = 0;
    for (const el of array){
        if(el === n) count++
    }
    return count;
}

/*

1. for...of
iterable 객체(배열, 문자열, Map, Set 등)의 요소들을 순회할 때 사용한다.
각 요소의 값을 가져와서 반복하여 작업을 수행하는 방식이다.

const arr = [1, 2, 3, 4];
for (const element of arr) {
  console.log(element); // 출력: 1, 2, 3, 4
}

------------------------------

2. for...in
객체의 프로퍼티를 열거(enumeration)할 때 사용한다.
프로퍼티 key를 가져와서 작업을 수행한다.

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key); // 출력: "a", "b", "c"
}

*/
