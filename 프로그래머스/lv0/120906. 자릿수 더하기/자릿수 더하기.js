function solution(n) {
    let num = n.toString();
        // n값 보존하면서 string으로 데이터 타입 변환
    let strArr = num.split('');
        // string을 substring으로 나눠 원소로 배열에 할당
    let numArr = [];
    for (const el of strArr){
        numArr.push(Number(el));
    }
        // substring 들을 숫자 타입으로 변환 이방법이 최선인지..
    return numArr.reduce((acc, cur)=> acc + cur);    
}

/*
0은 나눌수가 없으므로 0인 경우에만 예외처리

반복문
    num이 0보다 크면 
    10으로 나누면서 나머지 값을 numArr 배열에 push
    10으로 나눈값을 num에 재할당

reduce로 배열 원소들의 누계 리턴

function solution(n) {
    let numArr = [];
    let num = n;
    //n 값을 보존하기 위함 (이 문제에서는 아니지만 n이 다시 필요한 경우가 있으므로 n값이 완전히 변경되는 것을 막음)
    
    if (num === 0){
        return 0;
    }
    // 0은 나눌수가 없으므로 (무한루프) 예외처리
    else { 
        while (num > 0){
            Math.floor(numArr.push(num % 10));
            num = Math.floor(num / 10);
        }
    }
    return numArr.reduce((acc, cur)=> acc + cur);
}


--------------------> split()메서드를 이용한 다른 풀이
n을 string으로 변환
String prototype 메서드인 split()메서드를 활용해서 string을 substring으로 나눠 새로운 배열의 원소로 할당 
substring들을 숫자 타입으로 변환
reduce로 배열 원소들의 누계 리턴

function solution(n) {
    let num = n.toString();
        // n값 보존하면서 string으로 데이터 타입 변환
    let strArr = num.split('');
        // string을 substring으로 나눠 원소로 배열에 할당
    let numArr = [];
    for (const el of strArr){
        numArr.push(Number(el));
    }
        // substring 들을 숫자 타입으로 변환 이방법이 최선인지..
    return numArr.reduce((acc, cur)=> acc + cur);    
}

*/