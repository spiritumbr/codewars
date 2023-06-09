function diamond(n) {
  if (n % 2 === 0 || n < 1) {
    return null;
  }

  let diamondStr = '';

  for (let i = 0; i < n; i++) {
    const spaces = Math.abs((n - 2 * i - 1) / 2);
    const asterisks = n - spaces * 2;

    diamondStr += ' '.repeat(spaces);
    diamondStr += '*'.repeat(asterisks);
    diamondStr += '\n';
  }

  return diamondStr;
}