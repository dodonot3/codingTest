// 해치우면 스피드 페인팅 존잘 남캐 보여줌

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
*/