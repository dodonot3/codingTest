function solution(array, height) {
    const tallerPeople = array.filter((el)=> el > height).length;
    return tallerPeople;
}

/*
1. 더 큰 사람 수 식별자명 신경쓰기
2. 배열에서 조건에 맞는 원소만 남기기 (머쓱이보다 큰 사람들의 키들만)
3. 배열의 length 값 반환
*/