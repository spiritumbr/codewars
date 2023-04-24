function solution(number){

    const unitsArr = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tensArr = ["", "X", "XX", "XXX", "XL", "L","LX", "LXX", "LXXX", "XC"];
    const hundredsArr = ["", "C", "CC", "CCC", "CD", "D","DC", "DCC", "DCCC", "CM"];
    const thousandsArr = ["", "M", "MM", "MMM"];
    
    return thousandsArr[Math.floor(number/1000)] + hundredsArr[Math.floor((number%1000)/100)] + tensArr[Math.floor((number%100)/10)] + unitsArr[number%10];
  }