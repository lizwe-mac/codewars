function generateHashtag (str) {
    if(str.trim()=="") return false
    let new_str=str.trim().split(' ')
    new_str=new_str.filter(e=>e.trim()!='')
    console.log(new_str)
    // console.log(newStr)
    // console.log(new_str[0].slice(1))
    new_str = new_str.map(e=>e[0].toUpperCase()+e.slice(1))
    new_str.unshift('#')
    new_str=new_str.join('')
    // new_str.length > 140 ? 'false' : console.log(new_str)
    if (new_str.length > 140){
        return false
    }else{
        return new_str
    }

}
