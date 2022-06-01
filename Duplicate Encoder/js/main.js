//PREP

//Parameters
//Return
//Example
//Pseudocode

//1. Params - string
//2. Return - string
//3. Example - 'Prep' -> ')(()'
//4. Pseudocode -
// i. Split string into seperate chars
// ii. Map each char to either a '(' or ')': if char_count is > 1 return ')', else return '('

function duplicateEncode(word) {
  word = word.split("");
  const new_word = word.map((element, index, array) => {
    if (
      array.filter((elem) => elem.toLowerCase() == element.toLowerCase())
        .length > 1
    )
      return ")";
    else return "(";
  });
  return new_word.join("");
}
