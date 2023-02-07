function descendingOrder(n){
    let nArr = n.toString().split("");
    nArr.sort((a,b) => a-b);
    nArr.reverse();
    return +nArr.join("");
}