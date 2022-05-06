function pigIt(str){
    str = str.trim(' ')
    console.log(str)
    let newStr = str.split(' ').map(element => {
        if (element.length == 1 && element!== '!' && element!='?') return element+'ay'
        else if (element == '!' || element=='?') return element
        else{
          let elem = element.split('')
          let firstChar = elem[0]
          elem.shift()
          elem.push(firstChar)
          elem.push('ay')
          return elem.join('')
        }
    }).join(' ')
    return newStr
}