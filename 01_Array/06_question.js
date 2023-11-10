//How to check whether an array includes a particular value or not in JavaScript 

// for loop

let fruits_array = [ 
    "mango", 
    "banana", 
    "apple", 
    "pineapple", 
    "pomegranate", 
    "orange", 
  ];

const method_01 =(element)=>{
    for(let i=0;i<fruits_array.length;i++){
        if(fruits_array[i]===element){
            return `${element} is present at index ${i} `
        }
    }
    return `${element} is not found in this array`
}

console.log(method_01("apple"));
console.log(method_01("new"));
console.log(method_01("pineapple"));

// includes()

console.log(fruits_array.includes("pomegranate"));
console.log(fruits_array.includes("banana"));
console.log(fruits_array.includes("new"));

//indexOf()
console.log(fruits_array.indexOf("pomegranate"));
console.log(fruits_array.indexOf("banana"));
console.log(fruits_array.indexOf("new"));