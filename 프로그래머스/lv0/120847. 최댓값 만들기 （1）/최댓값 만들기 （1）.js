function solution(numbers) {
    let newArr = numbers.sort((a, b)=> b - a);
    return newArr[0] * newArr[1];
}