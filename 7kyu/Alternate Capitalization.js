function capitalize(s){
  let firstStr = "";
  let secondStr = "";
  
  for(let i = 0; i < s.length; i++){
    let letter = s[i];
    if(i % 2 === 0){
      firstStr+=letter.toUpperCase();
      secondStr+=letter.toLowerCase();
    } else {
      firstStr+=letter.toLowerCase();
      secondStr+=letter.toUpperCase();
    }
  }
  
  return [firstStr, secondStr];
}