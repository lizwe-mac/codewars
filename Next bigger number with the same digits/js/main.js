function nextBigger(n){
    const num_string_array = String(n).split('')
    if (num_string_array.length<=1) return -1
    // console.log(String(n).split(''))
    let possible_nums = []
    for (let i=0; i<num_string_array.length;i++){
        let first_num = [num_string_array[i]]
        let other_nums = num_string_array.slice(0,i).concat(num_string_array.slice(i+1))
        
        possible_nums.push(Number(first_num.concat(other_nums).join(''))) 
        let new_array = first_num.concat(other_nums)
        for(let j=1;j<new_array.length-1;j++){
            // console.log('other_nums')
            
            let first_num = [new_array[j]]
            let other_nums = new_array.slice(0,j).concat(num_string_array.slice(j+1)) //TO-DO fix this now
            // console.log(new_array)
            // console.log(first_num)
            // console.log(other_nums)
            // console.log(num_string_array.slice(j+1))
            possible_nums.push(Number(other_nums.concat(first_num).join(''))) 
        }
    }
    const sorted_num_array = possible_nums.sort((a, b) => a - b).filter((num, index, arr) => {if(arr.indexOf(num)==index) return num})
    const possible_nums_set = new Set(possible_nums.sort((a, b) => a - b))
    // const next_num = possible_nums.sort((a, b) => a - b)[possible_nums.sort((a, b) => a - b).indexOf(Number(n))+1]
    // console.log(`next_num: ${next_num}`)
    const next_num = sorted_num_array[(sorted_num_array.indexOf(n)+1)]
    console.log(sorted_num_array)
    // console.log(possible_nums_set)
    // if(next_num==n) return -1

    return next_num

  }
