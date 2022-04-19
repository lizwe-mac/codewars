function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function getNth(node, index) {
    // Your code goes here.
    let val = node.head;
    let count = 0;
    nodec=node.head
    while(nodec!=null){
        count++
        nodec = nodec.next
    }
    if (index>count-1 || index<0){throw new Error()}
    // console.log(`count=${count}`)
    else if (index===0){return node.head.value}
    else{
        for (let i=1; i<=index; i++){
            if (val.next===null) return null;
            val = val.next
        }
        return val.value
    }
  }

  const list = {
    head: {
        value: 6,
        next: {
            value: 10,                                             
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null	
                    }
                }
            }
        }
    }
