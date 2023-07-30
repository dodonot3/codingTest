function solution(hp) {
    const ant = [5, 3, 1];
    let count = 0;
    for (const el of ant){
        count += Math.floor(hp / el);
        hp = hp % el
    }
    return count;
}

/*
장군 5, 병정 3, 일개미 1
개미 공격력 배열 만들기
필요한 개미 수(count) 변수 만들기

반복문, 각 병력을 받아서
각 병력으로 나눈 몫은 count에 저장
나머지는 남은 hp에 재할당
*/