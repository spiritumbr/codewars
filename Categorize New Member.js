  // senior at least 55 years old and have handicap > 7
  // handicaps range from -2 to 26
  // data = array of pairs, [[age, handicap],[age, handicap]...]
  // input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
  // output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
  function openOrSenior(data){
    let output = []
    for(pair of data){
      if(pair[0] >= 55 && pair[1] > 7 )
        output.push("Senior")
      else 
        output.push("Open")
    }
    return output
  }