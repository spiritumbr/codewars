function isValidIP(str) {
  let ipArr = str.split(".");
  
  // check that there are 4 numbers
  if (ipArr.length !== 4) {
    return false;
  }
  
  // go through each number in ip address
  for (let i = 0; i < ipArr.length; i++) {
    const octet = ipArr[i];
    
    // check that number is not empty or has leading '0'
    if (octet.length === 0 || octet.length > 1 && octet[0] === '0' || octet.length > 3) {
      return false;
    }
    
    // check that each char is a valid number
    for (let j = 0; j < octet.length; j++) {
      if (isNaN(parseInt(octet[j], 10))) {
        return false;
      }
    }
    
    // convert to a number and check if between 0 and 255
    const octetValue = parseInt(octet, 10);
    if (isNaN(octetValue) || octetValue < 0 || octetValue > 255) {
      return false;
    }
  }
  
  return true;
}
