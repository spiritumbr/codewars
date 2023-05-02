function validate(n) {
  let nArr = Array.from(String(n), Number);
  let start = nArr.length % 2 === 0 ? 0 : 1;

  for (let i = start; i < nArr.length; i += 2) {
    nArr[i] *= 2;
    if (nArr[i] > 9) {
      nArr[i] -= 9;
    }
  }

  const sum = nArr.reduce((acc, val) => {
    return acc + val;
  }, 0);

  return sum % 10 === 0;
}