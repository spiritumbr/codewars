function abbrevName(name){

  const inputArr = name.split(" ")
  let outputArr = [];
  
  for(const word of inputArr){
    outputArr.push(word[0].toUpperCase());
  }
  
  const result = outputArr.join(".");
  return result;
}