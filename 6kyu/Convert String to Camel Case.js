function toCamelCase(str){

    if(str.length === 0){
        return str;
    }

    let resultString = str[0];
    for(let i = 1; i < str.length; i++){

        if(str[i] === "-" || str[i] === "_"){
            resultString += str[i+1].toUpperCase();
            i++;
        } else {
            resultString += str[i];
        }
    }
    return resultString;
  }