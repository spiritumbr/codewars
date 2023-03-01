function minMax(arr){
    arr = arr.sort((a,b) => a-b) // sort the array smallest to highest
    return [arr[0], arr[arr.length-1]] // return the smallest and the highest
}