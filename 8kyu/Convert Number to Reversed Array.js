function digitize(n) {
  let arr = [];
  let str = n.toString();
  
  for(let digit of str){
    arr.push(Number(digit));
  }
  return arr.reverse();
}