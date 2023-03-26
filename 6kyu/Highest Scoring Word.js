function high(x){

  let wordsArr = x.split(" ");
  let highestWord = "";
  let highestWordScore = 0;
  
  for(const word of wordsArr){
    let currentWordScore = 0;
    for(const letter of word){
      currentWordScore += letter.charCodeAt(0)-96;
    }
    if(currentWordScore > highestWordScore){
      highestWordScore = currentWordScore;
      highestWord = word;
    }
  }
  
  return highestWord;
}