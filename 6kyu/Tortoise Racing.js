function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }

  const resultHMS = [0, 0, 0];

  const relativeSpeed = v2 - v1;
  const timeInSeconds = Math.floor(g / relativeSpeed * 3600);

  resultHMS[0] = Math.floor(timeInSeconds / 3600);
  resultHMS[1] = Math.floor(timeInSeconds / 60) % 60;
  resultHMS[2] = timeInSeconds % 60;

  return resultHMS;
}
