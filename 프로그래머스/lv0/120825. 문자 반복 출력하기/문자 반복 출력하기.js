function solution(my_string, n) {
    const strArr = [...my_string];
    let result = '';
    for (i=0; i< strArr.length; i++){
        for (j=0; j<n; j++){
            result += strArr[i];
        }
    }
    return result;
}