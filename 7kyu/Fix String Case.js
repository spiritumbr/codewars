function solve(s){
  let countUpperLetters = 0;
  
  for(const letter of s){
    if(letter === letter.toUpperCase()){
      countUpperLetters++;
    }
  }
  
  if(countUpperLetters > (s.length)/2){
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}