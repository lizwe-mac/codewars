var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if (typeof(iterable)=="string") return iterable.split('').filter((elem, i, arr) => elem!=arr[i-1])
  else return iterable.filter((elem, i, arr) => elem!=arr[i-1])
}
