function maskify(cc) {
  cc = cc.split("");
  let result = "";
  
  for(let i = 0; i < cc.length-4; i++){
    result += "#";
  }
  
  result += cc.splice(-4,4).join("");
  return result;
}