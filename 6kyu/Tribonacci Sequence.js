function tribonacci(signature,n){
  
  if(n === 0){
    return [];
  } else if (n === 1){
    return [signature[0]];
  } else if (n === 2){
    return [signature[0], signature[1]];
  } else if (n === 3){
    return [signature[0], signature[1], signature[2]];
  }
  
  for(let i = 2; i < n-1; i++){
    signature.push(signature[i] + signature[i-1] + signature[i-2]);
  }
  
  return signature;
}