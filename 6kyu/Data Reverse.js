function dataReverse(data) {
  let result = [];
  for (let i = data.length -8; i >= 0; i-=8) {
    for(let j = 0; j < 8; j++){
      result.push(data[i+j]);
    }
  }
  return result;
}