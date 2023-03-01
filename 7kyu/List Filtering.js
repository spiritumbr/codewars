function filter_list(l) {
    let newArr = [];
    for(item of l){
      if(typeof item != "string"){
          newArr.push(item)
      }
    }
    return newArr;

    //let result = l.filter(item => typeof item != "string");

}