function getMiddle(s){
    let sArr = s.split("");
    while(sArr.length > 2){
        sArr.pop();
        sArr.shift();
    }
    sArr = sArr.join("");
    return sArr
}