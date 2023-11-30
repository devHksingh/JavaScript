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


/*
another way
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    // create a new, empty string called dupesRemoved
    let dupesRemoved = '';
    
    // loop through the string we want to remove dupes from 
    for(let i = 0; i < chars.length; i++){
         // for every character in the string, check: is it in dupesRemoved?
         if(!dupesRemoved.includes(chars[i])){
             // if no, add it
             dupesRemoved += chars[i];
         }
            // if yes, keep going through the loop (do nothing)
    }
       
    // dupesRemoved -- it has no duplicates!
    return dupesRemoved;
}

console.log(removeDupeChars("aabbccb1212"));

*/