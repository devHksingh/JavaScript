// Reverse an array in JavaScript

/*
Approach 1: Using reverse() method.
Approach 2: Using reverse for() loop.
Approach 3: Using unshift() method.
Approach 4: Using reduce() method.
Approach 5: Using map() function.
*/

let numbers_array = [1, 2, 3, 4, 5];

// Approach 1: Using reverse() method.
const reverseMethod = ()=>{
    console.log(`Original array:`,numbers_array);
    console.log(`Reversed Array:`,numbers_array.reverse());
}
// reverseMethod()

// Approach 2: Using reverse for() loop.
/*
In this approach, we will use the for() loop to reverse an array. First, we will create an array and then use the for loop to print the array elements in reverse order.

*/

const forMethod = ()=>{
    let reverseArray =[]
    for(let i=numbers_array.length -1;i>=0;i--){
        reverseArray.push(numbers_array[i])
    }
    console.log(reverseArray);
}

// forMethod()

// Approach 3: Using unshift() method.

const unshiftMethod=()=>{
    let reverseArray =[]
    console.log(`Original array:`,numbers_array);
    numbers_array.forEach((element=>{
        reverseArray.unshift(element)
        console.log(reverseArray);
    }))
    console.log(reverseArray);
}
// unshiftMethod()

// Approach 4: Using reduce() method.
