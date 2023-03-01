function XO(str) {
  const lowerStr = str.toLowerCase();
  let exes = 0, ohs = 0;
  for(let i = 0; i < lowerStr.length; i++){
    if(lowerStr[i] === "x"){
      exes++;
    } else if(lowerStr[i] === "o"){
      ohs++;
    }
  }
  return exes === ohs ? true : false;
}