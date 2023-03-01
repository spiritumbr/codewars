function calculateYears(principal, interest, tax, desired) {
  let amountOfYears = 0;
  if(desired <= principal){
    return 0;
  }
  while(desired > principal){
    let currentYearProfit = principal*interest;
    let currentYearTax = currentYearProfit*tax;
    principal += currentYearProfit - currentYearTax;
    amountOfYears++;
  }
  return amountOfYears;
}