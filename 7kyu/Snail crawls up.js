function snail(column, day, night) {
    let days = 0;
    let currentHeight = 0;
    while(currentHeight !== column){
        currentHeight += day;
        days++;
        if(currentHeight >= column){
            return days;
        }
        currentHeight -= night;
    }
}