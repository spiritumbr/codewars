function isPangram(string){
  //a pangram is a sentence that contains every single letter of the alphabet at least once

  //remove all non-letters
  string = string.replace(/[^a-zA-Z]+/g, '');

  // put string into an array and remove doubles
  let stringArr = string.toLowerCase().split("").sort();
  stringArr = stringArr.filter((x,i,a) => a.indexOf(x) === i);
  
  // if the resulting array is 26 letters long, it's a pangram
  if(stringArr.length === 26){
      return true;
  } else {
    return false;
  }
  // return stringArr.length === 26 ? true : false
}