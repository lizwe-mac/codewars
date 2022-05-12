function cakes(recipe, available) {

    const result = isSubset(Object.keys(recipe), Object.keys(available))
    if (!result) return 0
    else{
        return checkAmount(recipe,available).sort()[0]
    }
  }


  const isSubset = (array1, array2) => array1.every(element => array2.includes(element));

  const checkAmount = (obj1, obj2) => {
        let arr = []
        Object.keys(obj1).forEach(element => {
            
            arr.push(Math.floor(obj2[element]/obj1[element]))
            console.log(arr)
        })

        return arr
  }