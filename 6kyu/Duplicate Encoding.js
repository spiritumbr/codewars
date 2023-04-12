function duplicateEncode(word) {
  var result = "";
  // Convert the input string to lowercase to ignore capitalization
  word = word.toLowerCase();
  
  // Iterate over each character in the input string
  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    var count = 0;
    
    // Count the occurrences of the current character in the input string
    for (var j = 0; j < word.length; j++) {
      if (word[j] === char) {
        count++;
      }
    }
    
    // Concatenate a ")" if the current character appears more than once in the input string, or a "(" otherwise
    if (count > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  
  return result;
}
