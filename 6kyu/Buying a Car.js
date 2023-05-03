function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  // if the new car is worth less than the new car, it can be bought in 0 months
  if(startPriceOld >= startPriceNew){
    return [0,startPriceOld - startPriceNew];
  }

  let currentMoney = 0;
  let percent = 1-(percentLossByMonth/100);
  let monthCounter = 0;

  // while we don't have enough money by selling the old car to buy the new car
  while(currentMoney + startPriceOld < startPriceNew){

    monthCounter++;
   
    // increment current money by amount saved per month
    currentMoney += savingperMonth;

    // adjust monthly percentage loss every 2 months
    if(monthCounter % 2 === 0){
      percent -= 0.005;
    }

    // adjust car prices
    startPriceNew *= percent;
    startPriceOld *= percent;
  }
  return [monthCounter, Math.round(currentMoney + startPriceOld - startPriceNew)]
}
