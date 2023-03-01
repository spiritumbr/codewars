function numberJoy(n) {
    //convert number into array of numbers
    let sumOfDigits = 0;
    let digitArray = n.toString().split('');
    for (i = 0; i < digitArray.length; i++){
        digitArray[i] = +digitArray[i] | 0;
    }

    //calculate sum
    for(const digit of digitArray){
        sumOfDigits += digit;
    }

    //check if harshad number
    if(n % sumOfDigits !== 0){
        return false;
    }

    //obtain reverse sum
    let reverseSumOfDigits = +sumOfDigits.toString().split("").reverse().join("");

    //check if "sum * reverse sum === n" is true
    if(sumOfDigits * reverseSumOfDigits === n){
        return true;
    }
    return false;
}

numberJoy(1997);//false, not harshad
numberJoy(1729);//true
numberJoy(1);//true
numberJoy(1458);//true