function towerBuilder(nFloors) {
  let floorsArray = [];
  let amountOfSpaces = nFloors -1;
  let amountOfStars = 1;
  for(let i = 0; i < nFloors; i++){
    floorsArray[i] = "";
    for(let j = 0; j < amountOfSpaces; j++){
      floorsArray[i] += " ";
    }
    for(let j = 0; j < amountOfStars; j++){
      floorsArray[i] += "*";
    }
    for(let j = 0; j < amountOfSpaces; j++){
      floorsArray[i] += " ";
    }

    amountOfStars+=2;
    amountOfSpaces--;
  }
  return floorsArray;
}