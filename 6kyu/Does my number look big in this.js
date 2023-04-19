function narcissistic(value) {
    let valueArr = value.toString().split("");
    let sum = 0;
    for(let digit of valueArr){
        sum += Math.pow(digit,value.toString().length);
    }
    return sum === value ? true : false;
}
