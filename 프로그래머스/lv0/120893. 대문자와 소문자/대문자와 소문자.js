function solution(my_string) {
    let = changeStr = [];
    for (let i = 0; i < my_string.length; i++) {
        let char = my_string[i];
        if (char >= 'a' && char <= 'z') {
            changeStr.push(char.toUpperCase());
        }else if (char >= 'A' && char <= 'Z'){
            changeStr.push(char.toLowerCase());
        }
    }
    return changeStr.join('');
}

/*
for of와 삼항연산자로 바꾸는 법
function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}
*/