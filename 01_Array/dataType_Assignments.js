// Data Type Assignments
/*
Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

Question-2:    WAP to input radius of a circle and log the area of circle.

Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

Question-6:    WAP to input n numbers and log the average of those number.

Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

*/
// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.
const q1= (k)=>{
    console.log(`value in meter is ${k*1000} and in Centimeter is ${k*100000}`)
}

// q1(4)

// Question-2:    WAP to input radius of a circle and log the area of circle.

const q2 =(k)=> console.log(`Aera of circle is ${3.14*k*k}`);

q2(4)

// Question-3: WAP to input two numbers and perform arithmetic operations on those numbers.

const q3=(digit1,digit2,operation)=>{
    switch (operation) {
        case "add":
            console.log(`Sum of ${digit1} and ${digit2} is ${digit1 + digit2}`) 
            break;
        case "subtract":
            console.log(`Subtraction of ${digit1} and ${digit2} is ${digit1 - digit2}`)
            break;
        case "multiply":
            console.log(`multiplication of ${digit1} and ${digit2} is ${digit1 * digit2}`)
            break;
        case "divide":
            console.log(`divide of ${digit1} and ${digit2} is ${digit1 / digit2}`)
            break;
        default:
            break;
    }
}

q3(20,4,"divide")

// Question-4: WAP to calculate total marks in two subject and then calculate percentage.

const marks= new Map()
// console.log(Math.floor(Math.random()*100));

const q4 =()=>{
    let phyMarks =[]
    let mathMarks = []
    for(let i=0 ;i<4;i++){
        
        phyMarks.push(Math.floor(Math.random() *50+1))
        mathMarks.push(Math.floor(Math.random() *50+1))
    }
    marks.set("phy",phyMarks)
    marks.set("math",mathMarks)
    console.log(marks);
    
}
q4()