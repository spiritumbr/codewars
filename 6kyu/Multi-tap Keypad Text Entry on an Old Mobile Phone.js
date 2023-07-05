function presses(phrase) {
  const oneTap = "ADGJMPTW 1*#";
  const twoTaps = "BEHKNQUX0";
  const threeTaps = "CFILORVY";
  const fourTaps = "SZ234568";
  const fiveTaps = "79";
  
  let tapCounter = 0;
  phrase = phrase.toUpperCase();
  
  for(const letter of phrase){
    if(oneTap.includes(letter)){
      tapCounter++;
    }
    if(twoTaps.includes(letter)){
      tapCounter+=2;
    }
    if(threeTaps.includes(letter)){
      tapCounter+=3;
    }
    if(fourTaps.includes(letter)){
      tapCounter+=4;
    }
    if(fiveTaps.includes(letter)){
      tapCounter+=5;
    }
  }
  
  return tapCounter;
}