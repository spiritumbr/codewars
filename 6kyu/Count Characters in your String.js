function count(string) {
    let obj = {};
    // go through each letter of the string
    for(let letter of string){
      // if the letter is already in the object, increment it. if it doesn't exist, create it and set it to 1  
      if(obj[letter]){
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }
    return obj;
}