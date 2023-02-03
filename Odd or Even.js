function oddOrEven(n) {
    if(n%2 === 0){
        if((n/2) % 2 === 0){
            return "Even";
        } else {
            return "Odd";
        }
    } else {
        return "Either";
    }
}