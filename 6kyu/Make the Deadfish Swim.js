function parse( data )
{
    // remove all undesired characters
    const filteredData = data.split("").filter(char => (char === "i" || char === "d" || char === "s" || char === "o"));
    
    let value = 0;
    let result = [];

    for(const letter of filteredData){
        if(letter === "i"){
            value++;
        } else if (letter === "d"){
            value--;
        } else if (letter === "s"){
            value **= 2;
        } else if (letter === "o"){
            result.push(value);
        }
    }

    return result;
}
