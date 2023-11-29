//         Palindromes
/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){
    // built in method -reverse()
    // const reversedStr = str.split('').reverse().join('')
    // return str === reversedStr
    let strArr =str.split('')
    console.log(strArr)
    for(let i=0;i<=(strArr.length/2);i++){
        if(strArr[i]!=strArr[str.length-(i+1)]){
            return false
        }
    }
    return true
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
