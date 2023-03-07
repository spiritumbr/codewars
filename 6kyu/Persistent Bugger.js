function persistence(num) {
    // check if num.length === 1
    // if it is, return 0
    // if not, create counter variable.
    // while num.length > 1
    // multiply the digits of num
    
    if(num.toString().length === 1){
        return 0;
    } else {
        let currentNum = num;
        let counter = 0;
        while(currentNum.toString().length > 1){
            let result = 1;
            for(let digit of currentNum.toString()){
                result *= digit;
            }
            currentNum = result;
            counter++;
        }
        return counter;
    }
}