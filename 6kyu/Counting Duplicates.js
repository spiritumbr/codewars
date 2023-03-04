function duplicateCount(text){
    
    let arr = text.toLowerCase().split("");
    let count = 0;
    let obj = {};
    for(let num of arr){
        if(obj[num]){
            obj[num]++;
        } else {
            obj[num] = 1;
        }
    }
    for(let key in obj){
        if(obj[key] > 1){
            count++;
        }
    }
    return count;
}