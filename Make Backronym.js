var makeBackronym = function(string){
    let upperCaseArr = string.toUpperCase().split("");
    let outputString = "";
    for(let i = 0; i < upperCaseArr.length; i++){
        outputString += dict[upperCaseArr[i]] + " ";
    }
  return outputString.trim();
};