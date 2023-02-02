// You are given an input (n) which represents the amount of lines you are given.
// Your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.
function maxBisectors(n) {
    return n % 2 === 0 ? n*n/4 : ((n-1) * (n+1)) / 4;

    // if(n % 2 === 0){
    //     return n/2*n/2;
    // } else{
    //     return (n-1)/2 * (n+1)/2;
    // }
}

// 2 === 1
// 4 === 4
// 3 === 2
// 9 === 9