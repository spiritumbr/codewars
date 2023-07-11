function dashatize(num) {
  let str = Math.abs(num).toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= '0' && char <= '9') {
      if(i !== 0 && char % 2 !== 0){
        if(str[i] % 2 !== 0 && str[i+1] % 2 !== 0){
        result += "-" + char;
        } else {
          result += "-" + char + "-";
        }
      } else {
        if(char % 2 !== 0 && str[i+1] % 2 === 0){
          result += char + "-";
        } else {
        result += char;
        }
      }
    } else {
      return "NaN";
    }
  }
  
  return result;
}

// after cleanup, better version
function dashatize(num) {
  if (isNaN(num)) {
    return "NaN";
  }
  
  let str = Math.abs(num).toString();
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= '0' && char <= '9') {
      // add hyphen before odd digit if not first digit of number
      if(i !== 0 && char % 2 !== 0){
        result += "-" + char;
      } else {
        result += char;
      }
      // add hyphen between odd and even digits
      if(char % 2 !== 0 && str[i+1] % 2 === 0){
          result += "-";
      }
    }
  }
  
  return result;
}