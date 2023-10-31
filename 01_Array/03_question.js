// Remove elements from a JavaScript Array

/*
 1. using JavaScript pop() method
 2. using JavaScript shift() method
 3. using JavaScript splice() method
 4. using JavaScript filter() method
 5. using Remove Method
 6. using JavaScript Delete Operator
 7. using Clear and Reset Operator
 8. using for() loop and a new array
 9. using lodash _.remove method
*/

let arr = ["shift", "splice", "filter", "pop"];

/*
Method 1: using the pop() method:
This method is used to remove the last element of the array and returns the removed element.
 This function decreases the length of the array by 1. 
*/


const method_01= ()=>{
   const removedElement = arr.pop()
   console.log(`Removed element: `,removedElement);
   console.log(arr);
}
// method_01()

/*
Method 2: using the shift() method
This method is used to remove the first element of the array 
and reduce the size of the original array by 1. 
*/

const method_02=()=>{
    const removedElement = arr.shift()
    console.log(`First element removed is `,removedElement);
    console.log(arr)
}
// method_02()

/*
Method 3: Using the splice() method
This method is used to modify the contents of an array by removing the existing elements and/or adding new elements. 
To remove elements by the splice() method you can specify the elements in different ways.
*/