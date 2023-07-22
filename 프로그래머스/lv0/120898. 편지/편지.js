function solution(message) {
    return message.length * 2
    //string에는 내장 메서드 length가 있으므로 split를해서 배열에 따로 담을 필요가 없다.
}

/*
strArr배열을 만듦
message를 글자를 각각 나눠 strArr에 할당
strArr의 length 값에 2를 곱하여, 가로 길이로 반환

function solution(message) {
    let strArr = message.split("");
    return message.length * 2
}

-----------> 
문자열을 split를 이용해서 substring을 구해 풀었으나,
string에는 내장 메서드 length가 있으므로 split를해서 배열에 따로 담을 필요가 없다.

function solution(message) {
    return message.length * 2
}

*/