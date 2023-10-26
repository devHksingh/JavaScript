// Add new elements at the beginning of an array using JavaScript

/*
 1. Using Array unshift() method,not return change in original arr
 2. Using array.splice method
 3. Using Spread operator
 4. Using Array concat() Method
*/ 

const array = [1,2,3,4]
const firstElement = 141

// 1. Using Array unshift() method 

function method_01(arr) {
    arr.unshift(firstElement)
    console.log(arr);
}
// method_01(array)

// 2. Using array.splice method

function method_02() {
    // console.log();
    // const test = [firstElement,array.splice(0,0,44)]
    array.splice(0,1,6)
    console.log(array);
}

method_02()
