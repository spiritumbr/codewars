function kebabize(str) {
  // make sure the string is only letters
  str = str.replace(/[^a-zA-Z]/g, "");
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter >= "a" && letter <= "z") {
      result += letter;
    } else if (letter >= "A" && letter <= "Z") {
      // don't add the hyphen if first letter in word
      if (i !== 0) {
        result += "-" + letter.toLowerCase();
      } else {
        result += letter.toLowerCase();
      }
    }
  }

  return result;
}
