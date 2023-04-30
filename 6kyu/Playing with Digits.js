function digPow(n, p){
  let sum = 0;
  let digits = n.toString().split('');

  for(let i=0; i<digits.length; i++){
    sum += Math.pow(parseInt(digits[i]), p+i);
  }

  let k = sum / n;
  return Number.isInteger(k) ? k : -1;
}
