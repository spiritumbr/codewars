function inAscOrder(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  return arr.join() === sortedArr.join();
}