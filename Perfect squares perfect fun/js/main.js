function squareIt(int) {
  return Math.sqrt(String(int).length) % 1 !== 0
    ? "Not a perfect square!"
    : printSquares(int);
}

function printSquares(int) {
  let arr = [];
  let i = 0;
  const square = String(int).length;
  const squareNum = Math.sqrt(String(int).length);
  do {
    console.log(i);
    arr.push(String(int).slice(i, i + squareNum));
    i = i + squareNum;
  } while (i < square);
  return arr.join("\n");
}
