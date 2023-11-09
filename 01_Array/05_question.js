// How to empty an array in JavaScript ?

/*
1. Setting the array to a new array.
2. By using the length property to set the array length to zero.
3. By using the pop() method we will be popping each element of the array.
*/


let array = [1,2,3,4,5,6]

// Method 01 Setting the array to a new array.

const method_01 = ()=>{
    array=[]
}

// Method 02 By using the length property to set the array length to zero.

const method_02 =()=>{
    array.length=0
    console.log(`array length ${array.length} and array is ${array}`)
}

// method_02()


// Method 03 By using the pop() method we will be popping each element of the array.

const method_03 =()=>{
    console.log(array.length);
    // for(let i=0 ; i<array.length;i++){
    //     array.pop()
    //     console.log(i);
    // }
    while (array.length > 0) {
        array.pop();
    }
    console.log(array);
}

method_03()

/*
forEach() will not produce the desired result. Elements will be skipped, and the loop won't iterate over all elements because the array length is changing during the iteration.

Similarly, using a for loop is also problematic
In this case, the loop condition is evaluated only once at the beginning, and the loop continues until i reaches the initial length of the array. Since the array is changing, the loop condition becomes unreliable, and elements are not removed correctly.

To safely remove elements from an array while iterating over it, using a while loop as shown in the corrected code is a common and reliable approach. The condition is re-evaluated on each iteration, ensuring that all elements are processed.

*/