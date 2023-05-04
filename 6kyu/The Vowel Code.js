function encode(string) {
  let encodedString = "";
  
  for(const letter of string){
    if(letter === "a"){
      encodedString += "1";
    } else if(letter === "e"){
      encodedString += "2";
    } else if(letter === "i"){
      encodedString += "3";
    } else if(letter === "o"){
      encodedString += "4";
    } else if(letter === "u"){
      encodedString += "5";
    } else {
      encodedString += letter;
    }
  }
  
  return encodedString;
}

function decode(string) {
  let decodedString = "";
  
  for(const letter of string){
    if(letter === "1"){
      decodedString += "a";
    } else if(letter === "2"){
      decodedString += "e";
    } else if(letter === "3"){
      decodedString += "i";
    } else if(letter === "4"){
      decodedString += "o";
    } else if(letter === "5"){
      decodedString += "u";
    } else {
      decodedString += letter;
    }
  }
  
  return decodedString;
}