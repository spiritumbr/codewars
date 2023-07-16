function DNAtoRNA(dna) {
  let result = "";
  
  for(const letter of dna){
    if(letter === "T"){
      result += "U";
    } else {
      result += letter;
    }
  }
  
  return result;
}