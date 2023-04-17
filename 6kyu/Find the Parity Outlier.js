function findOutlier(integers){

  let firstIntParity = integers[0] % 2 === 0;
  let secondIntParity = integers[1] % 2 === 0;
  if(firstIntParity === secondIntParity){
    // the first 2 ints are the same parity. compare all other ints to this parity to find the outlier.
    for(let i = 2; i < integers.length; i++){
      if((integers[i] % 2 === 0) !== firstIntParity){
        return integers[i];
      }
    }
  } else {
    // the outlier is in the first 2 ints. we can use the third int to find which one is the outlier
    let thirdIntParity = integers[2] % 2 === 0;
    // if first and third are same parity, return second integer. else, return first integer.
    return firstIntParity === thirdIntParity ? integers[1] : integers[0]; 
  }
}