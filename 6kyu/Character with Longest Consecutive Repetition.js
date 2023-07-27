function longestRepetition(s) {
  if (s.length === 0) {
    return ["", 0];
  }

  let maxChar = s[0];
  let maxLength = 1;
  let currentChar = s[0];
  let currentLength = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar) {
      currentLength++;
    } else {
      currentChar = s[i];
      currentLength = 1;
    }

    if (currentLength > maxLength) {
      maxChar = currentChar;
      maxLength = currentLength;
    }
  }

  return [maxChar, maxLength];
}