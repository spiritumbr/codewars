let multiplyAll = 
    arr =>
        num =>{
            let newArr = [];
            for(let i = 0; i < arr.length; i++){
                newArr.push(arr[i]*num);
            }
            return newArr;
        }
        
            