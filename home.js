       console.log('hello');
    // this is a single line note:   alert('hello this is your enemy!');
//variables:

var b = "smoothie";
console.log(b);

var someNumber = 34;
console.log(someNumber);

document.getElementById('someText').innerHTML = "hello world";

    /* multi line notes:
var age = prompt('what is your age?'); 
document.getElementById('someText').innerHTML = age;
    */

//numbers in javascript

let num1 = 10;
// this 2 mean the same, increase by 1: num1 = num1 + 1;
num1++;
console.log (num1);

// and dreacememnt by 1 :
num1--;
console.log (num1);

//devide /, multiply *, remainder %.
console.log(num1 % 6);

//increace / decrement by 10.
num1 += 10;
console.log(num1); 

/*--Fonctions 
steps:
   
   1.create a function;
    2.call a function.

---*/
// create:
function fun() {
    console.log('this is a function');
}
// call the fnction.
fun();

/*
Let's create a function that take in a name and says hello follow by your name 

For  example:
 Name: "Chuy"
 Return: "Hello Chuy!"
*/

function greet(yourName) {
    var result = "hello " + yourName;
    console.log(result);
}

     var name = prompt("What is your name?");
    greet(name);

//how do arguments work in function?
//How do we add 2 number together in a function?

function sumNumbers (num1, num2){
    var result = num1 + num2;
    console.log(num1 + num2);
}

sumNumbers(10, 10);
// all yuo are doing is conbine 2 things together they can be numbers or strings.



//while loops 

/*
var num = 0;

while (num < 10) {
    num += 1; 
    console.log(num);
}

*/

//For loops

for (let num = 0; num <= 10; num += 2) {
    console.log(num)
}




