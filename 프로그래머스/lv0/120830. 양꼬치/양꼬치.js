function solution(n, k) {
    let lamb = n*12000;
    let juice = k*2000;
    let discount = 2000*Math.floor(n/10);
    return lamb + juice - discount;
}

/*
1. 양꼬치 주문수 * 12000 + 음료수 주문수 * 2000
2. 주문금액 - 양꼬치 10배수 마다 음료수 할인 - 2000*(n/10 소수 버림)
*/