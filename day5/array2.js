//let's create an array with values of "red", "green", "blue"

let array = ["red", "green", "blue"];
//then we're going to push orange at the end of our array

array.push("yellow");
console.log(array);
//here to remove last value in array

array.pop();
console.log(array);
//accessing second number in our array

console.log(array[1]);

//to check if our array have specified value example
let check = array.includes("orange");

console.log(check); //this will return false because orange we have already removed it

//array iteration and manipulation
//to display each color in our array

for(let i = 0; i <= array.length; i++){
    console.log(array[i]);
}
// double values of our array then return new array

let numbers = [1, 4, 5, 2 , 9];

numbers = numbers.map((num)=>num*2)

console.log(numbers)

// filter out even number in our array

numbers = numbers.filter((num)=> num % 2!== 0);

console.log(numbers);
//displaying values within array

array.forEach((arrDisplay)=>console.log(arrDisplay));

//array searching and sorting

//the index of the element "blue" in the colors array

let indexOfBlue = array.indexOf("blue");

//console.log(indexOfBlue);

//sorting numbers in ascending order

let sortNumbers = numbers.sort((a, b)=> a -b );
//console.log(sortNumbers);

//Convert the mixedArray to a string with elements separated by commas.
let mixedArr = [1, "hi", true, "MIT"];
let arrAsString = mixedArr.join();
console.log(arrAsString);


//objects
//let's create an object

