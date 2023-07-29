function getGrade (s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  let result = "";
  
  if(average >= 90){
    result = "A";
  } else if (average >= 80){
    result = "B";
  } else if(average >= 70){
    result = "C";
  } else if(average >= 60){
    result = "D";
  } else{
    result = "F";
  }
  
  return result;
}