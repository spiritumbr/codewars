let isAnagram = function(test, original) {
  let testArr = test.toLowerCase().split("").sort();
  let originalArr = original.toLowerCase().split("").sort();

  for(let i = 0; i < test.length; i++){
    if(testArr[i] != originalArr[i]){
      return false;
    }
  }
  return true;
};