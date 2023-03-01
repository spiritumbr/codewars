function accum(s) {
  let sArr = [];
  sArr = s.split("");
  let newArr = [];
  for(let i = 0; i < sArr.length; i++){
    let toPush = sArr[i].toUpperCase();
    for(let repeats = 0; repeats < i; repeats++){
      toPush += sArr[i].toLowerCase();
    }
    newArr.push(toPush);
  }
  let result = newArr.join("-")
  return result;
}