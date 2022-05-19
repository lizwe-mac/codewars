//P.R.E.P
//Parameters - message (words) in the form of the latin/Engish alphabet
//Return - a ROT13 ciphered message
//Example - parameter: 'abc' , return: 'nop'
//Pseudocode - 1. create alphabet object, 2. parse each letter in the message and map it to a different location in the alphabet, return ciphered message rererer

const alphabet = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
function rot13(message){
    const cipher = message.split('').map(letter => {
        if((letter.toLowerCase() in alphabet)==false) return letter
        else if(alphabet[letter.toLowerCase()] > 13){
            let cipher_letter = Object.keys(alphabet).find(e => alphabet[e]===alphabet[letter.toLowerCase()]-13) // number - 13
            if(letter===letter.toUpperCase()) return cipher_letter.toUpperCase();
            else return cipher_letter //check if original letter is uppercase
        }
        else{
            let cipher_letter = Object.keys(alphabet).find(e => alphabet[e]===alphabet[letter.toLowerCase()]+13) //number + 13
            if(letter===letter.toUpperCase()) return cipher_letter.toUpperCase();
            else return cipher_letter //check if original letter is uppercase

        }
    }).join('')
    return cipher
  }
