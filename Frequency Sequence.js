function freqSeq(str, sep) {
  let outputString = "";
  for(let i = 0; i < str.length; i++){
    outputString += countChars(str, str[i]);
    if(i < str.length-1){
      outputString+= sep;
    }
  }
  return outputString;
}

function countChars(stri, char){
  let result = 0;
  for(let i = 0; i < stri.length; i++){
    if(stri[i] === char)
      result++;
  }
  return result;
}
//countChars("hello","l")