function solution(dot) {
    const x = dot[0];
    const y = dot[1];
    return x>0 && y>0 ? 1 : x<0 && y>0 ? 2 : x<0 && y<0 ? 3 : 4;
}

/*
삼항영산자와 비교연산자를 사용해서 정수 배열이 속한 좌표의 사분면을 반환
*/