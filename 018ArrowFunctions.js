
//let add = function(num1,num2)
         //{
             //return num1 + num2;
         //}

//let sum = add

//let result = sum(5,6)   

//assigning a function to a variable
//console.log(sum);
//the function is anonymous
//sum is not a function but a variable

//let user = 'Hannah';
//function greet(u)
//{
    //let num = 5
    //console.log(num);
    //return `Hello ${u}!!`
//}

//let str =greet(user);
//console.log(str);
//the letter u is created inside the greet function thereby its called a local variable.
//user is created outside the greet function thereby its called a global variable.
//a global variable only work in a function with the concept of hoisting.

//function add1(num1,num2,num3=4)
//{
    //console.log(num1,num2,num3);
    //return num1 + num2 + num3;
//}

//let result1 = add1(5,6,9); 
//console.log(result1);
//num1,num2 and num3 are all parameters,while 5,6 and 8 are argument.
//default value is only applicable when you are not passing a value.


let greet = (user) => {
    console.log("Hello " + user);
    return 1; 
}

console.log(greet('Hannah'));
// this sign(=>) means the arrow function
let add = (num1,num2) => num1 + num2;
//when you have one statement you dont need a curly bracket.

let result = add(5,6)   
console.log(result);


