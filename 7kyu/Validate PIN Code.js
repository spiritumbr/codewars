function validatePIN (pin) {
  
    // check that the pin is of proper length
    if(pin.length !== 4 && pin.length !== 6){
      return false;
    }
    
    // check that each digit is a digit and not a letter or other character
    for(let digit of pin){
      let charCode = digit.charCodeAt(0);
      if(charCode < 48 || charCode > 57){
        return false;
      }
    }
    
    return true;
  }