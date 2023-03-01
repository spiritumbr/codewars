function findNextSquare(sq) {
  let sqsq = Math.sqrt(sq);
  if(Number.isInteger(sqsq)){
    return (sqsq+1)*(sqsq+1)
  } else
    return -1;
}