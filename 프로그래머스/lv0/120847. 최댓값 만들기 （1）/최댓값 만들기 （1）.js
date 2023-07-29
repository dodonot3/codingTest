function solution(numbers) {
    numbers.sort((a, b)=> b - a);
    return numbers[0] * numbers[1];
}

/*
배열을 오름차순으로 정렬 바꾸기
오름차순 0번째 인덱스와 1번째 인덱스 곱하기
-> 최대값

원본 배열을 바꾸지 않고 복사 배열로 정렬 하려면 ES2023 toSorted()사용
*/