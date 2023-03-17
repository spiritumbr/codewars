function order(words){
  // if input is empty, return empty
  if(words.length = 0){
    return words;
  }
  // split the string into words
  let wordsArr = words.split(" ");
  let newArr = [];

  // make output array same length number of words
  while(newArr.length < wordsArr.length){
    newArr.push("");
  }

  // find the number in each word and extract it
  for(word of wordsArr){
    let currentWord = "";
    let currentNumber = 0;
    for(letter of word){
      if(letter < 10  ){ // if it's a number
        currentNumber = Number(letter);
        currentWord += letter;
      } else {
        currentWord += letter;
      }
    }
    // place the words in order in a new array, at position number - 1
    newArr[currentNumber-1] = currentWord;
  }
  // return the array joined into a string
  return newArr.join(" ");
}