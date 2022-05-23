var runLengthEncoding = function(str){
    let arr_main = []
    const str_array = str.split('')
    if(str_array=='') return []
    let char = ''
    let char_total = 0
    
    let increment = 0
    console.log(str_array.length)
    // console.log(`str_array: ${str_array}`)
    // for(let i=0; i<str_array.length; i=i+incr)
    do{   
        console.log(`increment:${increment}`)
        char = str_array[increment]
        console.log(`char:${char}`)
        char_total++
        let incr = 0
        for(let j=increment+1;j<str_array.length;j++){
            incr=0
            if(str_array[increment]==str_array[j]){
                // incr++
                console.log('ran here ++')
                char_total++
            }else {
                console.log('ran here ---')
                incr++
                break;
            }
        }
        console.log(`incr:${incr}`)
        if(incr>1) increment = increment + incr
        else increment = increment + char_total
        
        let temp_array = [char_total,char]
        // console.log(char_total, char)
        // console.log(`temp_array: ${temp_array}`)
        arr_main.push(temp_array)
        char_total=0
        
        // console.log(incr)
        // if(incr =>str_array.length){
        //     console.log(incr)
        //     return arr_main
        // }
    }
    while(increment<str_array.length)
    // console.group(arr_main)
    return arr_main
   
  }
