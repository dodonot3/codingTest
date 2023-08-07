const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 1; i <= input[0]; i++) console.log('*'.repeat(i));
});

/*
반복문
n만큼 반복
반복한 만큼 출력
*/