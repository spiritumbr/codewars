function findUniq(arr) {
    let currentNum = -1;
    // check if the first 2 nums in array are the same
    if(arr[0] === arr[1]){
        currentNum = arr[0];
    // if they're not the same, then it means the 3rd number is 100% not the unique number
    } else{
        currentNum = arr[2];
    }
    // go through whole array and return when it's not equal tu currentNum
    for(let num of arr){
        if(num !== currentNum){
            return num;
        }
    }
}
