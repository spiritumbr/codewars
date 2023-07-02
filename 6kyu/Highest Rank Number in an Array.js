function highestRank(arr){
  let obj = {};
  
  // Count the occurrences of each number in the array
  for(let num of arr){
      if(obj[num]){
          obj[num]++;
      } else {
          obj[num] = 1;
      }
  }
  
  let maxCount = 0;
  let mostFrequentKeys = [];
  
  // Iterate over the count object to find the most frequent key
  for(let key in obj){
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      mostFrequentKeys = [Number(key)]; // Start a new array with the current key
    } else if (obj[key] === maxCount) {
      mostFrequentKeys.push(Number(key)); // Add the current key to the array
    }
  }
  
  let largestNumber = mostFrequentKeys.reduce((a, b) => Math.max(a, b));

  return largestNumber;
}