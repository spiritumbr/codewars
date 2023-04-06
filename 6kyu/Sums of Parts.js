function partsSums(ls) {
    const sums = [];
    let total = 0;
  
    for (const num of ls) {
      total += num;
    }
    
    for (const num of ls) {
      sums.push(total);
      total -= num;
    }
  
    sums.push(0);
    return ls.length === 0 ? [0] : sums;
  }
  