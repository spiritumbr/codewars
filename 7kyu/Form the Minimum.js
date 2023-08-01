function minValue(values) {
  const uniqueDigitsSet = new Set(values);
  const sortedDigits = Array.from(uniqueDigitsSet).sort((a, b) => a - b);
  const smallestNumber = sortedDigits.join('');
  return parseInt(smallestNumber, 10);
}