function solution(box, n) {
    
    let width = Math.floor(box[0]/n);
    let depth = Math.floor(box[1]/n);
    let height = Math.floor(box[2]/n);
    return width * depth * height;
} 

/*
구조 분해 할당
function solution(box, n) {
    let [width, length, height] = box;
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}
*/