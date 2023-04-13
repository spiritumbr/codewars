function spinWords(string){
  let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    // If word is more than 5 letters, reverse it
    if(arr[i].length >= 5){
      arr[i] = arr[i].split("").reverse().join("");
    }
  }
  return arr.join(" ");
}