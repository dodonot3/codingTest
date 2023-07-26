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

/*
문자열을 배열로 바꾸고
결과를 변수에 담기
반복문으로 배열 길이 만큼 반복하면서 n번만큼 같은 문자열 출력
스트링 타입이므로 연산자를 이용해서 합치고 반환

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

---------------------------------> 스프레드 문법, map, repeat() 이용

function solution(my_string, n) {
    return [...my_string].map(text => text.repeat(n)).join('');
}

Array.prototype.map()
배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 생성한다, 새로운 배열 반환(원본 배열 변경없이)

map(callback(currentValue, index, array));
    callback: 각 요소에 대해 호출될 함수로서, 새로운 값으로 매핑하는
    currentValue: 배열에서 현재 처리 중인 요소의 값
    index: 배열에서 현재 처리 중인 요소의 인덱스
    
-------------

String.prototype.repeat() 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환

str.repeat(count);
    count 문자열을 반복할 횟수.
    
---------------------------------> split(''), reduce() 이용

function solution(my_string, n) {
    return my_string.split('').reduce((acc,cur) => acc + cur.repeat(n),'');
}

*/
