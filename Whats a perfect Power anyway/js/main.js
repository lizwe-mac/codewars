var isPP = function(n){
    let arr = ''
    let array = []
    for(let i=2;i<=n;i++){
        for(let j=2; j<=n; j++){
            let pow = Math.pow(j,i)
            // if(pow == n) arr+=`(${i},${j})`
            if(pow == n) {
                array = [j,i]
                console.log(`arr=${array}`)
                return array; // fix me

            }
        }
    }
    if(array.length==0) return null
    console.log(`arr=${array}`)
  }
