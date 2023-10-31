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

const method_03 =()=>{
    const removedElement = arr.splice(1,1)
    console.log(`removed 1 element at index 1 and removed element in array is  `,removedElement);
    console.log(`remaing element is `,arr);
    // removedElement.splice(2,1,"trumpet")
    // console.log(`Remove 1 element at index 2, and insert "trumpet" `,removedElement);
}
// method_03()
// console.log(arr);

// Removing the specified element by value from the array using splice method

const spliceMethod=(element)=>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===element) {
            
            console.log(`Removed element is `,arr.splice(i,1));
            console.log(`Remaing element is `,arr);
        }
        
        
    }
}

// spliceMethod("filter")

/*
Method 4: Using the filter() method
This method is used to create a new array from a given array consisting of only those 
elements from the given array which satisfy a condition set by the argument function.
 To remove elements by filter() method you can specify the elements in different ways. 
*/


const method_05=(element)=>{
    if(element!=="pop"){
        return element
    }
}
// const newArr = arr.filter(method_05)
console.log(arr);
// console.log(newArr);

// Method 5: Using Remove Method
/*
Creating a remove method using the filter
 method to remove elements from a JavaScript array.
  This method works in reverse order. 
*/

const removeElement = (arr,element)=>{
    return arr.filter((value)=>{
        if(value !== element){
            return value
        }
    })
}

console.log(removeElement(arr,'splice'));

/*
Method 6: Using Delete Operator
Use the delete operator to remove elements from a JavaScript array.
*/