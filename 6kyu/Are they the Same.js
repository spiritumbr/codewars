    // check if array1 or array2 is null; if yes, return false
    // create a new array that has all the values in array 2 but square rooted ex: 121 -> 11
    // sort array 1 and the new array
    // compare element by element and make sure they're the same
    // return true or false depending on result

function comp(array1, array2){
    if(array1 === null || array2 === null){
        return false
    }

    let newArr = [];
    for(let num of array2){
        newArr.push(Math.sqrt(num));
    }
  
    array1.sort((a,b) => a - b); 
    newArr.sort((a,b) => a - b);
  
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== newArr[i]){
            return false;
        }
    }
  
    return true;
}