function solution(cipher, code) {
    let decoding = [];
    cipher = [...cipher];
    for(let i=1; i<=cipher.length; i++){
        if(cipher[code*i-1] == undefined) break;
        decoding += cipher[code*i-1];
    }
    return decoding;
}
/*
해독암호 새배열 만들기
cipher 문자열을 배열로
index code* i-1번째만 새배열에 push, 해독암호 배열 리턴

** undefined 일때도 예외 처리 해줌 if(cipher[code*i-1] == undefined)
** return으로 하니 최종적인 ''+undefined = undefined가 반환됨
** break;로 예외처리

function solution(cipher, code) {
    let decoding = [];
    cipher = [...cipher];
    for(let i=1; i<=cipher.length; i++){
        if(cipher[code*i-1] == undefined) break;
        decoding += cipher[code*i-1];
    }
    return decoding;
}
------------------------------------> index 초기화 할때 매개변수 이용해서 점화식 없애기

function solution(cipher, code) {
    let decoding = "";
    for(let i = code - 1; i<cipher.length; i+=code){
        decoding += cipher[i];
    }
    return decoding;
}

------------------------------------> 문자열 split로 나눠서 filter를 인덱스로 사용하는 법
function solution(cipher, code) {
    return cipher.split("").filter((_, index) => (index+1) % code === 0).join("");
}

*/
