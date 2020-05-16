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

for (let num1 = 0; num1 <= 10; num1 += 2) {
    console.log(num1)
}

//Data type
/*-----
let yourAge = 30; //number
let yourName = "Chuy";//string
let name = {first: "Jesus", last:"Doe"}; // object
let truth = fale // boolean
let groceries = ["apple", "banana", "oranges"];//array
let random; //undefined
let nothing = null //value null
-----*/

//strings in JS (common methods)
let fruit = "banana, apple, orange";
let moreFruits = "banana\napple";  //new line funcionality
console.log(fruit.length);
console.log(fruit.indexOf("nana")); //console will log where the first later is located b=0 a=1 n=2
console.log(fruit.slice(2,4));
console.log(fruit.split(','));//With the coma splite will break the array in to strings with comas in bwtween, without it the split with break the string by later ejam: ['b', 'a', 'n', 'a', 'n', 'a']
console.log(fruit.split('')); // splits by latter.
console.log(fruit.replace('ban' , 123));//find and replace. 123ana
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit[2]);
console.log(fruit.charAt(2));


//Array

let fruits = ['banana', 'apple', 'orange'];
fruits = new Array ('banana', 'apple', 'orange');

console.log(fruits[2]);// The number means the string with in that position in the array. Access value at index 2.

// Changing a string with in an array = Changing value.
fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//Array common methods
console.log('to string', fruits.toString());//will give you the list of the strings with in the array with the beginning "to string".
console.log(fruits.join(' - '));//will show the strings divided by the symbol in the paranthesys. 
console.log(fruits.pop(), fruits); // will make the last string in the array to disapear.
console.log(fruits.push('mango'),fruits);// push allows you to add strings to the array.Appends.
console.log(fruits[3]);
fruits[3] = 'new fruit';
console.log(fruits);// same as push, Appends.
fruits.shift(); // same as pop but will remove the first string.
console.log(fruits)
fruits.unshift('kiwi');//adds one or more strings to an array and return the new array. Add first element to an array.
console.log(fruits);

let vegetables = ['asparagus', 'potato', 'broccoli'];
//adding tow or more arrays.
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
//you can slice the new array.
console.log(allGroceries.slice(0, 4));
//fliping the order of an array. The last one will be the first one.
console.log(allGroceries.reverse());
//arrange an array by alphabet.
console.log(allGroceries.sort());


let someNumbers = [3, 5, 98, 32, 6, 3, 2, 7];
//arrange number by order.Function.
console.log(someNumbers.sort(function(a, b){return a-b}));


let emptyArray = new Array();
for (let num2 = 0; num2 <= 10; num2++) {
    emptyArray.push(num2);
}
console.log(emptyArray);


//Objects in Javascript aka project orientation.
//dictionaries in python

let student = {first: 'Chuy',
               last: 'Mata',
               age: 30,
               hieght: 170,
              studentInfo: function() {
                  return this.first + "\n" + this.last + "\n" + this.age;
              }
              
              };


//console.log(student.first);
//console.log(student.last);
student.first = "Jesus"; //This is how you change a value in an object.
//console.log(student.first);
student.age++; //Icreases the value by 1.
//console.log(student.age);

console.log(student.studentInfo());





















