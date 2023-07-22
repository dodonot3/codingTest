function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2+1);
}

/*
정수 배열의 인덱스 num1 부터 num2까지 자른 새 배열을 반환
(splice로 풀려고 하다가 testcase에서 일부 실패)
slice와 splice의 차이점 이해 
배열의 수정이 없으므로 slice를 이용해야하는 문제

------------> splice 와 slice의 차이점
splice
    수정을 위한 메서드다!! --> 배열의 요소를 추가 또는 제거하는 메서드 
    원본 배열을 변경, 제거한 요소 반환
    
    splice(startIndex, deletCount, item1, item3, ...)
        startIndex : 요소를 추가 제거할 시작 인덱스
        deletCount : 제거할 요소의 개수 지정, 0이면 요소를 제거하지 않음
        item$ : startIndex에 새로 추가할 요소들

slice
    배열의 일부분 추출, 새로운 배열로 반환
    원본 배열의 변경 없음
    
    slice(startIndex, endIndex)
        startIndex : 추출을 시작할 인덱스 지정 (해당 인덱스 요소가 포함)
        endIndex : 추출을 종료할 익덱스 지정 (해당 인덱스 요소가 미포함!!)
*/