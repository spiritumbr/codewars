function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a-b); // sort array smallest to biggest
    return numbers[0]+numbers[1]; // return the sum
}