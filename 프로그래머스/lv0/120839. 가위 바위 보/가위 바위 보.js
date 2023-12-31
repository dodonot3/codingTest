function solution(rsp) {
    let newRsp = {
        2 : 0,
        0 : 5,
        5 : 2
    }
   return [...rsp].map(key => newRsp[key]).join("");
}
/*
가위2, 바위0, 보5
[205] > [052]

리턴할 새 배열 만들고
반복문, 각 요소를 받아서
요소에 해당하는 리턴값을 새 배열에 푸시
새배열 리턴

function solution(rsp) {
    let newRsp = [];
    for(const el of rsp){
        if(el == 2){newRsp.push(0)}
        else if(el == 0){newRsp.push(5)}
        else if(el == 5){newRsp.push(2)}
        return newRsp.join('');
    }
}
-----------------------------------> 객체 활용해서 풀기
function solution(rsp) {
    let newRsp = {
        2 : 0,
        0 : 5,
        5 : 2
    }
   return [...rsp].map(key => newRsp[key]).join("");
}

map() : 배열의 각 요소를 순회하면서 콜백 함수를 호출하고, 콜백 함수의 반환값들을 모아서 새로운 배열을 생성
* 원본 배열의 요소와 새로운 배열의 요소는 1:1로 대응
(원본 배열의 첫 번째 요소가 콜백 함수를 거쳐 새로운 배열의 첫 번째 요소로 매핑되고, 두 번째 요소는 두 번째 요소로 매핑되는 식으로 대응되는 것)

*/
