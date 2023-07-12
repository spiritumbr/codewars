function fakeBin(x){
  let result = "";
  for(let digit of x){
    if(digit < 5){
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}