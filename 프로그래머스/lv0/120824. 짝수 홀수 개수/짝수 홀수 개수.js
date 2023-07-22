function solution(num_list) {
    let oddArr = [];
    let evenArr = [];

    for (const el of num_list){
        if(el%2 === 0){
            evenArr.push(el);
        }else oddArr.push(el);
    }
    
    return [evenArr.length, oddArr.length];

}

/*
홀수 oddArr 배열
짝수 evenArr 배열
홀 짝 각각 length 값을 담은 배열 반환

function solution(num_list) {
    let oddArr = [];
    let evenArr = [];

    for (const el of num_list){
        if(el%2 === 0){
            evenArr.push(el);
        }else oddArr.push(el);
    }
    
    return [evenArr.length, oddArr.length];

}

---
// 인덱스와 배열을 활용한 다른 풀이(from.프로그래머스)

function solution(num_list) {  
    let evenOddArr = [0, 0];
    //반환 될 짝홀 배열을 만들고
    for (const el of num_list){
        evenOddArr[el%2] += 1
    }
    // for of로 배열의 요소를 순회하면서 evenOddArr 인덱스에 나머지를 이용해서 지정하고 카운트 올리기
    return evenOddArr;
}

*/