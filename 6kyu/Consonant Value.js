function solve(s) {
  // replace all vowels with spaces
  s = s.replace(/[aeiou]/gi, " ");
  // split the string into words where there are spaces
  let arr = s.split(" ");
  let bestScore = 0;
  
  for(const str of arr){
    let currentScore = 0;

    for(const letter of str){
      // add current lowercase letter value to current score
      currentScore += letter.charCodeAt(0) - 96;
    }
    // replace best score when it is beaten
    if(currentScore > bestScore){
      bestScore = currentScore;
    }
  }
  
  return bestScore;
};