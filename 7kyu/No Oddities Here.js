function noOdds( values ){
  let evenValues = [];
  for(let value of values){
    if(value % 2 === 0){
      evenValues.push(value);
    }
  }
  return evenValues;
}