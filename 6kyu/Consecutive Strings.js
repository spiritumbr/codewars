function longestConsec(strarr, k) {
  let longestStrLength = 0;
  let longestStr = "";
  for(let arrIndex = 0; arrIndex < strarr.length-k+1; arrIndex++){
    let currentStr = "";

    for(let kElements = 0; kElements < k; kElements++){
      currentStr += strarr[arrIndex+kElements];
    }
    if(currentStr.length > longestStrLength){
      longestStrLength = currentStr.length;
      longestStr = currentStr;
    }
  }
  return longestStr;
}