function sortArray(array) {
  const oddNumbers = array.filter(num => num % 2 !== 0);
  oddNumbers.sort((a, b) => a - b);
  
  let oddIndex = 0;
  const sortedArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sortedArray.push(oddNumbers[oddIndex]);
      oddIndex++;
    } else {
      sortedArray.push(array[i]);
    }
  }
  
  return sortedArray;
}