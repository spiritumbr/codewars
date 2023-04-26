function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence

  if(n === 1){
    return 0;
  }

  let fibo = [0,1];

  // calculate next fibo number until we obtain the n-th one
  while(fibo.length < n){
    fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);
  }

  return fibo[fibo.length-1];
}