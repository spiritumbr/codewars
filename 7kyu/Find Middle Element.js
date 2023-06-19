function gimme (triplet) {
  const minValue = Math.min(...triplet);
  const maxValue = Math.max(...triplet);

  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] !== minValue && triplet[i] !== maxValue) {
      return i;
    }
  }
}