function removeSmallest(numbers) {
    if(numbers.length === 0)
        return numbers;
    let newNumbs = [];
    let lowestNumIndex;
    let lowestNum = 999;
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] < lowestNum){
            lowestNum = numbers[i];
            lowestNumIndex = i;
        }
        newNumbs.push(numbers[i])
    }
    newNumbs.splice(lowestNumIndex,1);
    return newNumbs;
}
let numbers = [ 261, 136, 186, 90, 146 ];
removeSmallest(numbers)