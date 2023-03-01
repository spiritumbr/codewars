function isTriangle(a,b,c)
{
  if(a <=0 || b <=0 || c<=0)
    return false;
  let semiperimeter = 0.5*(a+b+c);
  let area = Math.sqrt(semiperimeter*(semiperimeter-a)*(semiperimeter-b)*(semiperimeter-c)); //Heron's formula
  return area > 0;
}