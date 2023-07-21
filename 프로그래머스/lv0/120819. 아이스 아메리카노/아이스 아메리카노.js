function solution(money) {
    const iceAmericano = Math.floor(money / 5500);
    const change = money % 5500;
    return [iceAmericano, change];
    /*
    1. 커피잔수 = money / 5500 몫 소수버림
    2. 잔돈 = money % 5500 나머지
    3. 배열로 반환 [커피잔수, 잔돈]
    */
}