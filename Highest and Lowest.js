function highAndLow(numbers){
    let numArr = numbers.split(" ");
    //let max = Math.max(...numArr);
    let max = numArr.reduce((a,b) => Math.max(a, b));
    //let min = Math.min(...numArr);
    let min = numArr.reduce((a,b) => Math.min(a, b));
    let result = max + " " + min;
    return result;
}
//highAndLow("1 2 3") // "3 1"