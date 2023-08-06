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