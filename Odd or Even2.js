function oddOrEven(array) {
  let sum = 0;
  if(array.length === 0){
    return "even"
  } else {
    for(num of array){
      sum+=num;
    }
  }
  return sum % 2 === 0 ? "even" : "odd"
}