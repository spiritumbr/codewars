function squareDigits(num){
    let arr = num.toString().split("");
    let newArr = arr.map(x => x*x);
    let result = newArr.join("");
    return Number(result);

    //return +num.toString().split("").map(x => x*x).join("");
    //convert to string, split to array, square each value, join back to a string, and the "+" converts to a number 
  }