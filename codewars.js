function reverseLetter(str) {
    str = str.replace(/[^a-zA-Z]/gi, '');
    let arr = str.split("");
    arr.reverse();
    return arr.join("");
}


// split str into array
// check if array.length === remove doubles in array.length

function isIsogram(str){
    let chars = str.toLowerCase().split("");
    let uniqueChars = [];

    chars.forEach((char) => {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    });
    //chars.length === uniqueChars.length ? true : false;
    if(chars.length === uniqueChars.length){
        return true;
    } else {
        return false;
    }
}

function countConsonants(str) {
    let chars = str.toLowerCase().replace(/[^bcdfghjklmnpqrstvwxyz]/gi, '').split("");
    let uniqueConsonants = [];

    chars.forEach((char) => {
        if (!uniqueConsonants.includes(char)) {
            console.log(`adding ${char} to the list!!`);
            uniqueConsonants.push(char);
        }
    });
    return uniqueConsonants.length;
}
countConsonants("sillystring");

function discoverOriginalPrice(discountedPrice, salePercentage){
    // ...//.toFixed(2);
    let price = discountedPrice / ((100-salePercentage)/100);

    return price.toFixed(2);
    // total = price * ((100-discount)/100)
    // total / ((100-discount)/100) = price
}

var isSquare = function(n){
    if(Number.isInteger(Math.sqrt(n)))
        return true;
    return false; // fix me
}

function stray(numbers) {
    numbers.sort();
    if(numbers[0] === numbers[1]){
        return numbers[numbers.length-1]
    }
    return numbers[0];
}

function sumCubes(n){
  let sum = 0;
  for(let i = 1; i < n; i++){
    sum+= i*i*i;
    console.log("new sum is : " +sum + "after adding : "+ i*i*i);
  }
  return sum;
}
sumCubes(3);

function heron(a, b, c) {
    let s = (a+b+c)/2;
    return Math.sqrt(s * (s-a) * (s-b) * (s-c));
}
