function solution(sides) {
    const [a, b, c] = sides.sort((a, b) => b-a);;
    return a < b + c ? 1 : 2
}
// 디스트럭처링 할당
// sort로 내림차순으로 배열 재정렬 
// (EcmaScript 2023 toSorted는 안써짐..업데이트안되었나?)

/*
1. 배열에서 최대값 찾기 
    Math.max 안에 값이 와야하므로 배열을 넣을때는 스프레드 문법으로 배열을 풀어줘야 함.
2. 최대값을 제외한 배열 원소의 합
    filter 이용하여 최대값만 제외해서 배열 반환
    reduce 이용하여 배열 원소들의 누계값 구하기
3. 삼항연산자 이용
    1이 2보다 작으면 1리턴 (삼각형O), 나머지 경우 2리턴 (삼각형X)
    
    function solution(sides) {
    const sideMax = Math.max(...sides);
    const sideRemainderSum = sides.filter((el)=> el !== sideMax ).reduce((acc,cur)=>acc+cur);
    
    return sideMax < sideRemainderSum ? 1 : 2;
}
    
런타임 에러가 발생했다! 왜?? => 예외상황 제외 시키기
    이등변 삼각형일 경우에 max 값이 2개가 되고 1개 반환 -> sideRemainderSum 값이 하나가 됨
    변의 크기가 모두 같은 경우 sideRemainderSum 의 값이 0이 된다
    
-----------> 예외 상황 제외하려고 보니까 코드의 가독성이 떨어져 가는 거 같음. 
아래 코드로 고쳤을때 런타임 에러는 해결했으나 다른 테스트케이스에서 문제 발생.

function solution(sides) {
    if (new Set(sides).size === 1) return 1
    const sideMax = Math.max(...sides);
    const sideRemainderSum = sides.filter((el)=> el !== sideMax ).reduce((acc,cur)=>acc+cur);
    
    if (sideRemainderSum.length === 1) sideRemainderSum.push(sideMax);

    return sideMax < sideRemainderSum ? 1 : 2;
}

-----------> 더 간단한 방법을 찾다가 디스트럭처링(구조분해) 할당을 생각해냄!!!!!

function solution(sides) {
    const [a, b, c] = sides.sort((a, b) => b-a);;
    return a < b + c ? 1 : 2
}    

디스트럭처링 할당
sort로 내림차순으로 배열 재정렬 
(EcmaScript 2023 toSorted는 안써짐..업데이트안되었나?)


*/