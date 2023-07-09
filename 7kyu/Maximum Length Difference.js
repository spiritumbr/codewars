function mxdiflg(a1, a2) {
  if(a1.length === 0 || a2.length === 0){
    return -1;
  }
  
  let highestDiff = 0;
  
  for(const a1Val of a1){
    for(const a2Val of a2){
      let currentDiff = Math.abs(a1Val.length - a2Val.length);
      if(currentDiff > highestDiff){
        highestDiff = currentDiff;
      }
    }
  }
  
  return highestDiff;
}