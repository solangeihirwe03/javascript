//for loop to display array
let arr = [1,4,5,7,8];

/*for(let i= 0; i <=arr.length; i++){
    console.log(arr[i]);
}
*/
arr.forEach(myArr);
 
function myArr(array){
    console.log(array)
}
//measuring the size ot an array

let length = arr.length;
console.log("the length of array is:", length);

//function
//function declaration
function myName(){
    return "Hey I am Solange";
}
console.log(myName());

//function definition
let greet = function(){
    return "Hello world!";
}

console.log(greet());
//arrow function
let greeting = ()=>{
    return "Hello my fellows"
}

console.log(greeting());
// nested array is array(outer array) within in another array(insider array)
//for example

let myArray = [["solange",21 ,"foodie"],["MIT", 19 , "programmer"] ];

for(let i =0; i<=myArray.length; i++){
    console.log(myArray[i]);
}
 //nested object
 let personality = {
    name: "Tina",
    address:{
        street: "KN 202",
        city: "Kigali"
    }

 }

console.log(personality.address);
