function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // check if current char and next char are NOT adjacent in alphabet
    if (array[i].charCodeAt(0) + 1 !== array[i+1].charCodeAt(0)) {
      // return the char that follows current char in alphabet
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
}