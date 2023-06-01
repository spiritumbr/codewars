function sortByLength (array) {
  array.sort((a, b) => {
    return a.length - b.length;
  });
  
  return array;
};