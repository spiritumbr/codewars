function sumDigits(number) {
    number = Math.abs(number).toString();
    let sum = 0;
    
    for(let digit of number){
      sum += Number(digit);
    }
    
    return sum;
  }