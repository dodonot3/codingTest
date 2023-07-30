function solution(rsp) {
    let newRsp = [];
    for(const el of rsp){
        if(el == 2){newRsp.push(0)}
        else if(el == 0){newRsp.push(5)}
        else if(el == 5){newRsp.push(2)}
    }
    return newRsp.join('');
}
/*
가위2, 바위0, 보5
[205] > [052]

리턴할 새 배열 만들고
반복문, 각 요소를 받아서
요소에 해당하는 리턴값을 새 배열에 푸시
새배열 리턴
*/