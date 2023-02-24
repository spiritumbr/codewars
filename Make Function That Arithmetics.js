function arithmetic(a, b, operator){
    //your code here!
    if(operator.toLowerCase() === "add"){
        return a+b
    } else if(operator.toLowerCase() === "subtract"){
        return a-b
    } else if(operator.toLowerCase() === "multiply"){
        return a*b
    } else if(operator.toLowerCase() === "divide"){
        return a/b
    }
  return 0
// use switch instead of if statements
//     switch (operator) {
//         case "add":
//             return a+b
//         case "subtract":
//             return a-b
//         case "multiply":
//             return a*b
//         case "divide":
//             return a/b
//         default:
//             return 0
//     }

}