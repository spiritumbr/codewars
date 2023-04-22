function bouncingBall(h,  bounce,  window) {
  // h is starting height
  // bounce is % that h is divided by
  // each time it passes the height of window going up and down, we increment

// conditions for valid experiment
if(h <= 0 || bounce >= 1 || bounce <= 0 || window >= h){
  return -1;
}

// the first time the ball passes the window on its way down
let sum = 1;
h = h*bounce;

// as long as the ball bounces higher than the window
while(h > window){
  // it will pass the window 2 times. once upwards and once downwards.
  sum += 2;
  h = h*bounce;
}

return sum;
}