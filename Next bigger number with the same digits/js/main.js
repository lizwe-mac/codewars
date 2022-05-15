function nextBigger(n){
    const num_string_array = String(n).split('')
    let possible_nums = []
    for (let i=0; i<num_string_array.length;i++){
        let first_num = [num_string_array[i]]
        let other_nums = num_string_array.slice(0,i).concat(num_string_array.slice(i+1))
        console.log(first_num)
        console.log(other_nums)
        possible_nums.push(Number(first_num.concat(other_nums).join(''))) 
        let new_array = first_num.concat(other_nums)
        for(let j=1;j<new_array.length;j++){
            console.log('other_nums')

            let first_num = [num_string_array[j]]
            let other_nums = num_string_array.slice(0,j).concat(num_string_array.slice(j+1))
            possible_nums.push(Number(other_nums.concat(first_num).join(''))) 
        }
    }
    return possible_nums

  }
