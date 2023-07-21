function solution(numbers){
    const average = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
    return average;
}

/*
Array.prototype.reduce()
배열의 각 요소에 대해 주어진 콜백 함수를 실행하면서 하나의 결과 값을 반환한다.
배열 요소들을 순차적으로 처리하면서 누적된 값을 계산하는데 사용됨

arr.reduce(callback[, initialValue])

callback : 누적 계산을 수행하는 함수 4개의 인수를 받는다.
    * accumulator : 누적 값을 저장하는 변수, 콜백 함수의 반환 값이 누적됨 
                  (초기값을 설정하면 설정한 초기값을 사용하고 없는 경우 배열의 첫번째 요소가 초기값이 됨)
    * currentValue : 현재 처리 중인 배열 요소 값.
      currentIndex : 현재 처리 중인 배열 요소의 인덱스.
      array : reduce()를 호출한 배열 자체.
initialValue : 초기 누적 값. 지정하지 않으면 배열의 첫 번째 요소가 초기값으로 사용됨. 빈 배열에 reduce()를 호출하면 에러가 발생
*/
