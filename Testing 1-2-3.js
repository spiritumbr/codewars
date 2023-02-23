var number=function(array){
    if(array.length === 0){
        return array
    }

    for(let i = 0; i < array.length; i++){
        array[i] = i+1 + ": " + array[i]
    }
    return array
}