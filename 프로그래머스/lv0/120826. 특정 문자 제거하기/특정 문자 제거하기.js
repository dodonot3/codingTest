function solution(my_string, letter) {
    const strArr = [...my_string];
    for (let i = 0; i < strArr.length; i++){
        if (strArr.includes(letter)){
            strArr.splice(strArr.indexOf(letter),1);  
        }
    }
    return strArr.join("");

}

/*
my_string을 배열로 반환
배열에서 특정 문자 letter이 있다면 
반복문으로 제거 완전히 제거 splice로 제거  
배열을 문자열로 합쳐서 다시 반환

includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별, 불리언 타입으로 반환
Array.prototype.indexOf()메서드는 배열에서 지정된 요소의 첫 번째 인덱스를 반환하고, 존재하지 않으면 -1을 반환
splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
    array.splice(start, deleteCount, item1, item2, ...);
    start: 변경을 시작할 인덱스
    deleteCount: 삭제할 요소의 개수를 나타냅니다. 
                 양수 값이면 해당 인덱스부터 시작하여 지정된 개수만큼 요소를 삭제
                 음수 값이면 배열의 끝에서 부터 시작하여 지정된 개수만큼 요소를 삭제
                 생략하면 start 인덱스부터 끝까지 모든 요소를 삭제합니다.
    item1, item2, ...: 옵션, 새로 추가할 요소, start 인덱스 위치에 새로운 요소들을 추가한다.
    
-------------------->
*/