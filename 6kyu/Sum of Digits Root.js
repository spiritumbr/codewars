function digitalRoot(n) {
  let nStr = n.toString();
  while(nStr.length > 1){
    let nextN = 0;
    for(let i = 0; i < nStr.length; i++){
      nextN += Number(nStr[i]);
    }
    nStr = nextN.toString();
  }
  return Number(nStr);
}