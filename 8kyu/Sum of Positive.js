function positiveSum(arr) {
  let sum = 0;
  for(let number of arr){
    if(number > 0){
      sum += number;
    }
  }
  return sum;
}