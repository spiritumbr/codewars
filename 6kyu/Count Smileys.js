function countSmileys(arr) {
  let smileyCounter = 0;
  
  for(const smiley of arr){
    if(smiley[0] === ";" || smiley[0] === ":"){
      if(smiley.length === 3){
        if(smiley[1] === "-" || smiley[1] === "~"){
          if(smiley[2] === "D" || smiley[2] === ")"){
            smileyCounter++;
          }
        }
      } else {
        if(smiley[1] === "D" || smiley[1] === ")"){
          smileyCounter++;
        }
      }
    }
  }
  
  return smileyCounter;
}