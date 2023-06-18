function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  // convert to Date type
  const curDate = new Date(currentDate);
  const expDate = new Date(expirationDate)
  // check if entered code is correct, and that date is not expired
  if(enteredCode === correctCode && curDate <= expDate){
    return true;
  }
  return false;
}