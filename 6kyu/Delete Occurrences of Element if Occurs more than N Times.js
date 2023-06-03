function deleteNth(arr,n){
  let newList = [];
  
  for(let num of arr){
    // check how many times we have the current num in our newList
    let count = newList.filter(x => x === num).length;
    // add it if count is below allowed amount
    if(count < n){
      newList.push(num);
    }
  }
  
  return newList;
}