function squareSum(numbers){
  return numbers.reduce((acc, cur) => acc + cur * cur, 0);
}