function evaporator(content, evap_per_day, threshold){
  let currentPercentage = 100;
  let days = 0;
  
  while(currentPercentage > threshold){
    days++;
    currentPercentage *= (1-evap_per_day/100);
  }
  
  return days;
}