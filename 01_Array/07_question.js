// How to insert an item into array at specific index in JavaScript

/*
01. using array.splice() Method
02. using JavaScript for loop
*/

let arr= [1,2,3,4,5,6]

// Method 01 : splice()

const method_01 =(ele,index)=>{
    arr.splice(index,0,ele)
    console.log(arr)
}

// method_01(88,4)

// Method 2: Using JavaScript for loop

const method_02 =(ele,index)=>{
    for(let i=arr.length;i>index;i--){
        // console.log(arr);
        console.log(arr[i]);
        arr[i]=arr[i-1]
        console.log(arr);

    }
    arr[index]=ele
    console.log(arr)
}

method_02(77,2)