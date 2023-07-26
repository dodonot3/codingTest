function solution(my_string, letter) {
    const strArr = [...my_string];
    for (let i = 0; i < strArr.length; i++){
        if (strArr.includes(letter)){
            strArr.splice(strArr.indexOf(letter),1);  
        }
    }
    return strArr.join("");

}

/*
my_string을 배열로 반환
배열에서 특정 문자 letter이 있다면 
반복문으로 제거 완전히 제거 splice로 제거  
배열을 문자열로 합쳐서 다시 반환
*/