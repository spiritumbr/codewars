class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for(let num of args){
      if(num < smallest){
        smallest = num;
      }
    }
    return smallest;
  }
}