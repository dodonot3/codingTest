
function solution (angle){
    return 0 < angle && angle < 90 ? 1 : angle === 90 ? 2 : 90 < angle && angle < 180 ? 3 : 4
}

/*
switch문에서는 각 case에 범위를 직접 지정할 수 없음! 비교식이 오는 것도 옳지 않다.
가독성을 고려해서 if-else문으로 하는게 좀 더 낫다고 생각했으나
대부분의 경우에서는 삼항연산자가 가독성이 더 좋음.
따라서 범위 지정 없이 삼항연산자로 풀이

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

switch문도 풀어봤으나 비교식이 오는 것이 옳지 않으므로 패스
switch문은 단일 값과 각 case값을 비교하는데 사용된다.
그러므로 비교할 값만 올 수 있음!

function solution(angle) {
    switch(true){
        case 0 < angle && angle < 90 :
            return 1;
        case angle === 90 : 
            return 2;
        case 90 < angle && angle < 180 : 
            return 3;
        case angle === 180 : 
            return 4;
    }
}
*/
