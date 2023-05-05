function tripledouble(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  for(let i = 0; i < str1.length-2; i++){
    // check that 3 consecutive digits are the same
    if(str1[i] === str1[i+1] && str1[i] === str1[i+2]){
      let triple = str1[i];
      for(let j = 0; j < str2.length-1; j++){
        //check that it's the same digit as the previous step, and that 2 consecutive digits are the same
        if(triple === str2[j] && str2[j] === str2[j+1]){
          return 1;
        }
      }

    }
  }
  
  return 0;

}