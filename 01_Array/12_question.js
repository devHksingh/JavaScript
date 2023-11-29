// Remove  duplicate characters from string
/*
Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23@@@@@@@@@"; 
 
function removeDupeChars(chars){
    const passwordArray = password.split('')
    // console.log(passwordArray)
    // Set is Use to remove duplicate elements from an array
    return ([...new Set(passwordArray)].join(''))
}

console.log(removeDupeChars(password));
