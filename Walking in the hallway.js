function contact(hallway) {
    //Good Luck :D
    let startPos=-1;
    let endPos=-1;
    let smallest = 999;
    let answer = 999;
    for (let i = 0; i < hallway.length; i++) {
        if(hallway[i] === ">")
            startPos = i;
        if(hallway[i] === "<"){
            endPos = i;
            if(endPos!==-1 && startPos!==-1){
                answer = Math.ceil((endPos - startPos)/2);
                if(answer < smallest){
                    smallest = answer;
                }
            }
        }
    }
    return smallest === 999 ? -1 : smallest;
}
// contact("---->---<"); // 2
// contact("----<-->---"); // -1
// contact("----><-----"); // 1
// contact(">>>>--<<<<<<<<<<<<<<<<<<<<"); // 2
// contact(">---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>"); // 5




