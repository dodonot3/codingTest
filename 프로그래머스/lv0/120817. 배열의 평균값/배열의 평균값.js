function solution(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur);
    return numbers.length === 0 ? 0 : sum / numbers.length;
}
