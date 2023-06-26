function findAverage(array) {
  if(array.length === 0){
    return 0;
  }
  const sum = array.reduce((acc, cur) => acc + cur,0);
  return sum/array.length;
}