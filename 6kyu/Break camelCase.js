  // change string to array
  // go through array. if you find a capital letter, insert a space at the index before it.
  // join array as string and return value

function solution(string) {

  let arr = string.split("");
  for(let i = 1; i < arr.length; i++){
    if(arr[i].charCodeAt(0) < 90){
      arr.splice(i,0," ");
      i++;
    }
  }
  return arr.join("");

}
