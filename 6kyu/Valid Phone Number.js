function validPhoneNumber(phoneNumber){
  // Check if the phone number has the proper length
  if(phoneNumber.length !== 14){
    return false;
  }
  // Check that the phone number has all the special characters at the right places
  if(phoneNumber[0] !== "(" || phoneNumber[4] !== ")" || phoneNumber[5] !== " " || phoneNumber[9] !== "-"){
    return false;
  }

  // Extract the digits from the phone number
  const digits = phoneNumber.split("").filter((char) => {
    const charCode = char.charCodeAt(0);
    return charCode >= 48 && charCode <= 57;
  });

  // Check that there are exactly 10 digits
  if (digits.length !== 10) {
    return false;
  }

  return true;
}