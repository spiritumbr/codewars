function longest(s1, s2) {
  let s1s2 = (s1 + s2).split(""); // combine s1 and s2 into an array
  let result = [];
  for(letter of s1s2){
    if(!result.includes(letter)){
      result.push(letter); // add current letter to new array if not yet included
    }
  }
  return result.sort().join(""); // sort letters alphabetically and return as string
}