function SeriesSum(n){
    let result = 0
    const numerator = 1
    let denominator = 1
    for(let i = 0; i < n; i++){
        result += numerator/denominator
        denominator += 3
    }
    return result.toFixed(2).toString()
}