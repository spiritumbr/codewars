function smallEnough(a, limit){
  for(const val of a){
    if(val > limit){
      return false;
    }
  }
  return true;
}