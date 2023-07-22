function solution(slice, n) {
    return Math.ceil(n / slice);
}

/*
사람수를, 
주어진 피자 조각으로 나눠진 피자로 나눴을때, 
나머지가 1이상일 경우 무조건 자릿 수 올림
(사람수가 0인 경우 없음)
*/