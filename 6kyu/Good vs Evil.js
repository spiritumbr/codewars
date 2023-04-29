function goodVsEvil(good, evil){

  const goodArr = good.split(" ");
  const evilArr = evil.split(" ");
  let goodSum = goodArr[0]*1 + goodArr[1]*2 + goodArr[2]*3 + goodArr[3]*3 + goodArr[4]*4 + goodArr[5]*10;
  let evilSum = evilArr[0]*1 + evilArr[1]*2 + evilArr[2]*2 + evilArr[3]*2 + evilArr[4]*3 + evilArr[5]*5 + evilArr[6]*10;

  if(goodSum === evilSum)
    return "Battle Result: No victor on this battle field";
  if(goodSum > evilSum)
    return "Battle Result: Good triumphs over Evil";
  else
    return "Battle Result: Evil eradicates all trace of Good";
}
