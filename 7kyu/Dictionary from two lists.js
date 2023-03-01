// let keys = [1,2,3,4,5]
// let values = ["a", "b", "c" , "d"]
function createDict(keys, values){
  let dictionary = {};
  for(let i = 0; i < keys.length; i++){
    let val = values[i];
    let key = keys[i];
    if(val === undefined){
        val = null;
    }
    dictionary[key] = val;
  }
  return dictionary;
}
// createDict(keys, values);