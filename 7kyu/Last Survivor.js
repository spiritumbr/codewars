function lastSurvivor(letters, coords) {
    let arrLetters = letters.split("");
    for(index of coords){
        arrLetters.splice(index,1)
    }
    return arrLetters[0];
}