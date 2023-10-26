// Get the first and last item in an array using JavaScript
/*
1.  Using length property in JavaScript
2.  Using Array.pop() and Array.shift() Methods
3.  Using Array.slice() Method
4.  Using Array.filter() Method
5.  Using Spread Operator
*/ 
const arr = [1,2,3,4] 

// 1. Using length property

const method_01 = ()=>{
    console.log(arr[0]);
    console.log(arr[arr.length-1]);
}

// method_01()

// 2. Using Array.pop() and Array.shift() Methods

function arrPopAndShift() {
    console.log(`last element: `,arr.pop());//remove and return last element
    
    console.log(`first element: `,arr.shift()); // remove and return first element
    
}
// arrPopAndShift()

// 3. Using Array.slice() Method

const method_02 = ()=>{
    console.log(`first element:`, arr.slice(0,1));
    console.log(`first element:`, arr.slice(arr.length-1));

}
// method_02()

// 4.  Using Array.filter() Method

const method_03 = ()=>{
    // console.log(arr.filter());
    function firstAndLastElement(arrElement,index) {
        if (index === 0 || index === arr.length -1){
            return arrElement
        }
    }
    const [first,last] = arr.filter(firstAndLastElement)

    console.log(first);
    console.log(last);
    
}

method_03()

// 5.  Using Spread Operator

const [firstElement, ...rest] =arr
const lastElement = rest.pop()

console.log(`First element of array is `,firstElement);
console.log(`Last element of array is `,lastElement);