function solution(age) {
    return 2022-age+1; // 문제의 기준은 2022년도 이므로 이렇게 풀이
    
    //return new Date().getFullYear()-age+1; 
    //2022년도 기준으로 풀이함.
    
/*
Date.prototype.getFullYear()
자바스크립트에서 프로토타입 메서드는 함수 호출할 때 별도로 prototype이라고 명시하지 않고도 호출할 수 있다.
객체들은 프로토타입 체인을 이용하여 메서드와 속성을 상속한다.
객체는 자신의 프로토타입 객체를 가리키는 내부속성 [[Prototype]] 또는 __proto__을 가지고 있으므로, 해당 프로토타입 객체에 정의된 메서드들을 호출할 수 있다.
*/
}