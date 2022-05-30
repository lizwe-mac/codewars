function persistence(num) {
  let counter = 0;
  let count = 0;
  if (String(num).length == 1) {
    console.log(`${num} is finisehed`);
    return counter;
  }
  do {
    if (String(num).length == 1) {
      console.log(`${num} is finisehed`);
      count++;
      return counter;
    }

    console.log("#################");
    num = String(num)
      .split("")
      .map((n) => parseInt(n))
      .reduce((previousValue, currentValue) => previousValue * currentValue, 1);
    console.log(`total: ${num}`);
    console.log(`counter: ${counter}`);
    counter++;
  } while (count == 0);

  return counter;
}
