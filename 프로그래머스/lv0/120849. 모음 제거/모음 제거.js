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

---------------------replace vs replaceAll
* replace() 첫 번째 일치하는 부분만 치환
* replaceAll() 모든 일치하는 부분을 한꺼번에 치환

replace() 메서드:
첫 번째로 발견된 문자열만 치환되고 나머지는 그대로 남는다. (그래서 이 문제에서는 replace를 사용하면 안됨)
정규식을 사용하지 않을 경우, replace() 메서드는 첫 번째 일치하는 부분만 치환함

replaceAll() 메서드:
문자열 전체에서 모든 일치하는 부분을 치환
*/