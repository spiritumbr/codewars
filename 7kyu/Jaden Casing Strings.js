String.prototype.toJadenCase = function () {
  let arrWords = this.split(" ");
  let newArr = [];
  for(word of arrWords){
    newArr.push(word[0].toUpperCase() + word.slice(1));
  }
  return newArr.join(" ");
};