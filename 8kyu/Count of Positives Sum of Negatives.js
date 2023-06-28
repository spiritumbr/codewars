function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let positivesCount = 0;
  let negativesSum = 0;
  
  for(let num of input){
    if(num < 0){
      negativesSum += num;
    } 
    if (num > 0){
      positivesCount++;
    }
  }
  
  return [positivesCount, negativesSum];
}