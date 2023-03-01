const prevMultOfThree = n => {
    while(n % 3 !== 0 || n !== 0){
        if(n % 3 === 0){
            return n;
        }
        n = Math.floor(n / 10);
    }
    return null;
}