function getCount(str) {
    //without regex
    let counter = 0;
    for(letter of str){
        if(letter === "a" ||letter === "e" ||letter === "i" ||letter === "o" ||letter === "u"){
            counter++;
        }
    }
    return counter;

    //with regex
    //return str.match(/[aeiou]/g).length 
}