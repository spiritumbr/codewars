var encryptThis = function(text) {
  let result = "";
  // split input text into words
  let words = text.split(" ");
  
  // go through each word
  for(const word of words){
    const length = word.length;
    
    if(length === 1){
      // 1 char means charcode only
      result += word.charCodeAt(0);
    } else if (length === 2){
      // 2 chars means charcode + remaining letter
      result += word.charCodeAt(0) + word[1];
    } else {
      // change first letter to charcode, add last letter, add remaining letters except second one and then add second letter
      result += word.charCodeAt(0) + word[length-1] + word.slice(2, length - 1) + word[1];
    }
    
    // don't forget the space between each word
    result += " ";
  }
  
  return result.trim();
}