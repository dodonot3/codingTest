function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}

/*
str1에 str2를 includes로 확인
삼항연산자로 true면 1, false면 2 반환
*/