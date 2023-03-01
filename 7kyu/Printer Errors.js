function printerError(s) {
  let badCounter = 0
  for(let i = 0; i <s.length; i++){
    if(s.charCodeAt(i)>109)
      badCounter++
  }
  return `${badCounter}/${s.length}`
}