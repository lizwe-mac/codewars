function descendingOrder(n){
    return parseInt(String(n).split('').map(e => parseInt(e)).sort((a, b) => {if (a>b) return a - b}).reverse().map(e=>String(e)).join(''))
  }
