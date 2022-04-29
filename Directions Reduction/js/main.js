function dirReduc(arr){
    // arr.forEach((e,i) =>{
    //     console.log(e)
    //     console.log(i)
    //     console.log(arr)
    //     if(e.toLowerCase()=='north' && arr[i+1].toLowerCase()=='south'){
    //         arr.splice(i,2)
    //         console.log(arr)
    //     }
    //     else if(e.toLowerCase()=='south' && arr[i+1].toLowerCase()=='north'){
    //         arr.splice(i,2)
    //         console.log(arr)

    //     }
    //     else if(e.toLowerCase()=='east' && arr[i+1].toLowerCase()=='west'){
    //         arr.splice(i,2)
    //         console.log(arr)
            
    //     }
    //     else if(e.toLowerCase()=='west' && arr[i+1].toLowerCase()=='east'){
    //         arr.splice(i,2)
    //         console.log(arr)
            
    //     }
        
    // })
    let i = 0
    let condition = true
    console.log(arr)
    while(condition || arr!='' || arr.length!=1){
        let og_length = arr.length
        if(i>=og_length-1){
            return arr
        }
        if(arr[i].toLowerCase()=='north' && arr[i+1].toLowerCase()=='south'){
            arr.splice(i,2)
            console.log(arr)
        }
        else if(arr[i].toLowerCase()=='south' && arr[i+1].toLowerCase()=='north'){
            arr.splice(i,2)
            console.log(arr)

        }
        else if(arr[i].toLowerCase()=='east' && arr[i+1].toLowerCase()=='west'){
            arr.splice(i,2)
            console.log(arr)
            
        }
        else if(arr[i].toLowerCase()=='west' && arr[i+1].toLowerCase()=='east'){
            arr.splice(i,2)
            console.log(arr)
            
        }
        let curr_length= arr.length
        if(curr_length==2 && arr[i]==arr[i+1]){
            console.log('same')
            return arr
        }
        
        // else{
        //     if(curr_length==1 || arr==''){
        //         return arr
        //     }else{
        //         if(curr_length!=og_length){
        //             i=0
        //         }else{
        //             i++
        //         }
        //     }
        // }
        if(curr_length==1 || arr==''){
            return arr
        }else{
            if(curr_length!=og_length){
                i=0
            }else{
                i++
            }
        }
        // if(i=arr.length){
        //     console.log('end')
        //     condition=false
        //     return arr
        // }
    }
    return arr
  }
