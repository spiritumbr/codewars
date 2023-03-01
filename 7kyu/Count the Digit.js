function nbDig(n, d) {
    let counter = 0
    for(let i = 0; i <= n; i++){
        let digits = (i**2).toString().split("")
        for(let digit of digits){
            if(Number(digit) === d){
                counter++
            }
        }
    }
    return counter
}