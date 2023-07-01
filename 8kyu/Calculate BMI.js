function bmi(weight, height) {
  const bmi = weight/(height*height);
  let message = "";
  
  if(bmi <= 18.5){
    message = "Underweight";
  } else if (bmi <= 25){
    message = "Normal";
  } else if (bmi <= 30){
    message = "Overweight";
  } else {
    message = "Obese";
  }
  
  return message;
}