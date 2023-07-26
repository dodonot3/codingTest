function solution(my_string, letter) {
    return my_string.split(letter).join('');
}

/*
my_string을 배열로 반환
배열에서 특정 문자 letter이 있다면 
반복문으로 제거 완전히 제거 splice로 제거  
배열을 문자열로 합쳐서 다시 반환

function solution(my_string, letter) {
    const strArr = [...my_string];
    for (let i = 0; i < strArr.length; i++){
        if (strArr.includes(letter)){
            strArr.splice(strArr.indexOf(letter),1);}
    }
    return strArr.join("");
}

* includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별, 불리언 타입으로 반환

* Array.prototype.indexOf()메서드는 배열에서 지정된 요소의 첫 번째 인덱스를 반환하고, 존재하지 않으면 -1을 반환

* splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
    array.splice(start, deleteCount, item1, item2, ...);
    start: 변경을 시작할 인덱스
    deleteCount: 삭제할 요소의 개수를 나타냅니다. 
                 양수 값이면 해당 인덱스부터 시작하여 지정된 개수만큼 요소를 삭제
                 음수 값이면 배열의 끝에서 부터 시작하여 지정된 개수만큼 요소를 삭제
                 생략하면 start 인덱스부터 끝까지 모든 요소를 삭제합니다.
    item1, item2, ...: 옵션, 새로 추가할 요소, start 인덱스 위치에 새로운 요소들을 추가한다.
    
--------------------> String.prototype.split() 메서드를 활용한 방법

function solution(my_string, letter) {
    return my_string.split(letter).join("");
    
    console.log(my_string.split(letter));
    //	매개변수로 각각 "BCBdbe", "B" 를 넘겼을때 [ '', 'C', 'dbe' ] 출력
}

* String.prototype.split() 메서드는 문자열을 지정한 구분자를 기준으로 나누어 배열로 반환한다. 
  원본 문자열은 변경되지 않고, 새로운 배열을 반환
  
  string.split(separator, limit);
      separator: 문자열을 분리할 기준이 되는 구분자, 문자열로 설정(정규식 패턴도 가능), 
                 생략하면 기본적으로 공백 문자 (스페이스, 탭, 개행 등)를 구분자로 사용.
      limit: 옵션, 반환되는 배열의 최대 길이, 나누어진 배열의 길이가 limit보다 작을 때만 유효, 생략하면 제한 없음.
      
--------------------> String.prototype.replaceAll() 메서드를 활용한 방법

function solution(my_string, letter) {
    return my_string.replaceAll(letter,'');
}

replaceAll() 메서드는 문자열에서 특정 문자열(또는 정규식)과 일치하는 부분을 새로운 문자열로 바꾸어 반환
원본 문자열은 변경 없이, 새로운 문자열을 반환

string.replaceAll(searchValue, replaceValue);
    searchValue: 교체하고자 하는 부분 문자열 또는 정규식 패턴
    replaceValue: searchValue와 일치하는 부분을 대체할 새로운 문자열

replaceAll() 메서드는 ES2021(ES12)에서 도입되었, 따라서 환경에 따라 지원 여부를 확인하여 사용해야 한다. 
이전 버전에서는 replace() 메서드와 정규식 조합으로 교체해야했음.

--------------------> Array.prototype.filter() 메서드를 활용한 방법

function solution(my_string, letter) {
    return [...my_string].filter( text => text !== letter).join('');
}

----------

function solution(my_string, letter) {
    return Array.from(my_string).filter( text => text !== letter).join('');
}

Array.from() 메서드는 유사 배열 객체나 iterable object를 얕게 복사해 새로운Array 객체를 만듦.

*/