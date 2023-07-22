function solution(price) {
    return Math.floor(price < 100000 ? price 
        : price >= 100000 && price < 300000 
            ? price * 0.95 
            : price >= 300000 && price < 500000
                ? price * 0.9
                : price * 0.8);
}
/*
가독성이 있는 삼항연산자로 풀이
1. 누계가 10만 미만이면 price 그대로 반환
2. 누계가 10만 이상이고 30만 미만이면 - 5% 할인
3. 누계가 30만 이상이고 50만 미만이면 - 10% 할인
4. 누계가 50만 이상이면 - 20% 할인
*/