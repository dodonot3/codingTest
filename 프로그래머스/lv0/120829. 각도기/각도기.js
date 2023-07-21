function solution(angle) {
    if(0 < angle && angle < 90){
        return 1;
    }else if(angle === 90){
        return 2;
    }else if(90 < angle && angle < 180){
        return 3;
    }else if(angle === 180){
        return 4;
    }
}
/*
switch문에서는 각 case에 범위를 직접 지정할 수 없음! (삼항연산자도 포함) 
가독성을 고려해서 if-else문으로 하는게 낫다.
*/