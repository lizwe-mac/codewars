function getCount(str) {
    // var vowelsCount = 0;
    
    // enter your majic here
    let _str = str.trim()
    console.log(_str)
    console.log(_str.split(''))
    console.log(_str.split('').filter(e => e!=" "))
    console.log(_str.split('').filter(e => e!=" ").join(''))
    vowelsCount = _str.split('').filter(e => e!=" " && (e=='a'||e=='e'||e=='i'||e=='o'||e=='u'))
    // vowelsCount.forEach((element,index,arr)=>{
    //     for(let i=0;i<arr.length;i++){
    //         console.log(`${element}:${arr[i]}`)
    //         if(arr[i]==element && i!=index){
    //             console.log(`spliced: ${arr[i]}`)
    //             arr.splice(i,1)
    //             i--
    //         }
    //         console.log(arr)
    //     }
    //     console.log(`arr:${arr}`)

    //     return arr
    // })
    
    // .join('').length

    console.log(`vowel count: ${vowelsCount}`)
    // console.log(`vowel count_arr: ${arr.length}`)
    return vowelsCount.length;
    // return str.trim().split('').filter(e => e!=" ").join('').length
  }
