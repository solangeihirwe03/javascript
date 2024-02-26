 var myName = "Solange";

 var age = 40;
  console.log("my name is "+ myName + " i am " + age + " years old");
  console.log(`my name is ${myName} and i am ${age} years old`)

  //arrays
  const arr = ["string",1 ,2, true];
  const myFavorite = ["irish potatoes", "rice", "meat"];

  console.log(arr);
  console.log(myFavorite);

  //variable declaration
  let x;

  //variable definition
 x=10;
//variable declaration and definition in one step
let w = 10;

function myLastName(){
    let me ="Ihirwe";
    console.log(me);
}
myLastName();
 me = "solange"; //you can define global scope in local
 console.log(me);
 //object is set of key pair values
 //declaration and definition
 let frontEndClass ={
    team1:{
        member:10,
        gender: "female",
        single: true

    },
    team2:{
        member:12,
        gender: "female",
        single: false
    }
 }
 console.log(frontEndClass);
 //undefined occur when you didn't define your variable
 //for example
 var z;
 
 console.log(z);
 //or 
 //you didn't create that variable 
 console.log(y); 

 //null
 let y = null;
 console.log( y); 
 
 //NaN
 // it returns NaN when you have done operation with variable which is not a number
 //ex:
 let str = "solange";
 let height = 1.70;

 console.log(str/height);
