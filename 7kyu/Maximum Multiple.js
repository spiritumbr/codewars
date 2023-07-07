function maxMultiple(divisor, bound){
  for(let i = bound; i > 1; i--){
    if(i % divisor === 0){
      return i;
    }
  }
}