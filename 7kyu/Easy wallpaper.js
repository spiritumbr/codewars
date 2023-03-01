function wallpaper(l, w, h) {
    //length of L, width of W, height of H
    //width of roll = 52cm
    //length of roll = 1000cm
    //wants 15% greater length than he needs
    if(l * w * h === 0){
        return numbers[0];
    }

    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

    let walls = (l * h * 2) + (w * h * 2)
    let oneRoll = 0.52*10;
    let neededPaperRolls = Math.ceil(walls * 1.15 / oneRoll);
    return numbers[neededPaperRolls];
}
wallpaper(6.3, 4.5, 3.29)//sixteen
wallpaper(7.8, 2.9, 3.29)//sixteen
wallpaper(6.3, 5.8, 3.13)//seventeen
wallpaper(6.1, 6.7, 2.81)//sixteen
wallpaper(0, 5.6, 3.20)//zero