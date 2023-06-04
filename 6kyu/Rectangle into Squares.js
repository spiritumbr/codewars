function sqInRect(lng, wdth){
  
  // make sure the shape is a valid rectangle and not a square
  if(lng === wdth || lng < 1 || wdth < 1){
    return null;
  }
  
  const result = [];
  let currentWidth = wdth;
  let currentLength = lng;

  // cut out squares from the rectangle and adjust length/width of remaining area
  while (currentWidth !== currentLength) {
    if (currentWidth > currentLength) {
      result.push(currentLength);
      currentWidth -= currentLength;
    } else {
      result.push(currentWidth);
      currentLength -= currentWidth;
    }
  }
  
  // the remaining area is a square so add it to the result
  result.push(currentWidth);
  
  return result;
}