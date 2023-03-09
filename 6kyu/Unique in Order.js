  // go through each letter and compare it to the next letter
  // if they're not the same, add the current letter to the result array

var uniqueInOrder=function(iterable){
  let result = [];

  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i+1]){
        result.push(iterable[i]);
    }
  }
  
  return result;
}