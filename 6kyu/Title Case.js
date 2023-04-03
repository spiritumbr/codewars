function titleCase(title, minorWords) {
  // Convert the title and minorWords strings to lowercase
  title = title.toLowerCase();
  let minorWordsArr = minorWords ? minorWords.toLowerCase().split(" ") : [];

  // Split the title string into words
  let words = title.split(" ");

  // Capitalize the first word and any word that is not a minor word
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (i === 0 || minorWordsArr.indexOf(word) === -1) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  // Join the words back into a string and return it
  return words.join(" ");
}