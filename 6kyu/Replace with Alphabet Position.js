function alphabetPosition(text) {
    let returnString = ""
    for(let i = 0; i < text.length; i++){
        let currentChar = text.toLowerCase().charCodeAt(i);
        if(currentChar >= 97 && currentChar <= 122){
            returnString += (currentChar - 96) + " ";
        }
    }
    return returnString.trimEnd();
}