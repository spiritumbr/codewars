function twoSum(numbers, target) {
  for(let index1 = 0; index1 < numbers.length; index1++){
    for(let index2 = 0; index2 < numbers.length; index2++){
      if(numbers[index1] + numbers[index2] === target && index1 !== index2){
        return [index1, index2]
      }
    }
  }
}