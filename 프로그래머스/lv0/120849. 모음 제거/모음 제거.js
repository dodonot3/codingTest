function solution(my_string) {
    const vowel = ["a", "e", "i", "o", "u"];
    for(const str of vowel){
        my_string = my_string.replaceAll(str, "");
    }
    return my_string;
}

/*
문자열을 배열로 바꾸고
순회하면서 replaceAll로 aeiou 제거
나머지 문자열을 묶어 리턴

**replace랑 replaceAll 차이를 몰라서 시간을 잡아먹음

function solution(my_string) {
    const vowel = ["a", "e", "i", "o", "u"];
    for(const str of vowel){
        my_string = my_string.replaceAll(str, "");
    }
    return my_string;
}

---------------------> replace vs replaceAll
* replace() 첫 번째 일치하는 부분만 치환
* replaceAll() 모든 일치하는 부분을 한꺼번에 치환

replace() 메서드:
첫 번째로 발견된 문자열만 치환되고 나머지는 그대로 남는다. (그래서 이 문제에서는 replace를 사용하면 안됨)
정규식을 사용하지 않을 경우, replace() 메서드는 첫 번째 일치하는 부분만 치환함

replaceAll() 메서드:
문자열 전체에서 모든 일치하는 부분을 치환

---------------------> 정규표현식
처음 알게됨.. 얼마나 많이 쓰는지는 잘 모르겠다. (replaceAll 같은 함수가 나오는 거 보니..)

function solution(my_string) {
    return my_string.replace(/[aeiou]/g,'');
}

---------------------> filter 사용방법
해보려 했는데 아이디어가 떠오르지 않았다. 해당 방법으로 가능하다.
모음을 배열로 걸러내도 빈배열만 반환됨 includes를 꼭 해서 모음을 제외한 나머지 문자를 포함시켜줘야 한다. 

function solution(my_string) {
    return Array.from(my_string).filter(str => !['a','e','i','o','u'].includes(str)).join('');
}

*/