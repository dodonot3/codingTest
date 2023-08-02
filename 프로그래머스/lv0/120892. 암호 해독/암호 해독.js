function solution(cipher, code) {
    let decoding = [];
    cipher = [...cipher];
    for(let i=1; i<=cipher.length; i++){
        if(cipher[code*i-1] == undefined) break;
        decoding += cipher[code*i-1];
    }
    return decoding;
}
/*
cipher 배열로
index code* i-1번째만 새배열에 push
새배열 join 리턴

*/