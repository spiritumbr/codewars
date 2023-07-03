function betterThanAverage(classPoints, yourPoints) {
  const totalClassScore = classPoints.reduce((acc,curr) => acc += curr,0);
  const amountOfStudents = classPoints.length;
  const classAverage = (totalClassScore / amountOfStudents);
  return yourPoints > classAverage;
}