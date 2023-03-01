function reverseWords(str) {
    let words = str.split(" ");
    let result = ""
    for(const word of words){
        let reversed = word.split("").reverse().join("")
        result+= " " + reversed
    }
    return result.trim()
}