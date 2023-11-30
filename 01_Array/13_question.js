/*
Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str) {
    str = str.toLowerCase();
    const letterMap = new Map();

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            console.log(letterMap.get(str[i]))
            console.log(i)
            const currentCount = letterMap.get(str[i]) || 0;
            letterMap.set(str[i], currentCount + 1);
            console.log(letterMap);
            // console.log(letterMap.get(str[i]));
        }
    }

    return(letterMap);
}

// countChars("Peggy Porth");


console.log(countChars("Peggy Porthmm"));
// countChars("Peggy Porth")