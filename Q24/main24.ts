
// Excercise 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// Tests for Equality and inequality with strings

// Equality test
let laptop="hp";
console.log("Equality Test\n");
console.log(laptop =="hp");

// Inequality test
console.log("Inequality Test\n");
console.log(laptop !="hp");

// Tests using the lower case function
console.log("Test with lowercase \n");
console.log(laptop !=="hp");

//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number = 6;
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(number === 6);
 console.log(number !== 6);
 console.log(number > 2);
 console.log(number <10);
 console.log(number>=4);
 console.log(number<=30);

 // Tests using "and" and "or" operators ("&& and |)
 let num1= 30;
let num2= 10;
// We use "and" operator
console.log(`\nTest using "&&" and "||" operators\n`);
console.log(num1 >= 30 && num2 <= 5)

//Here we use "or" operator
console.log(num1 >= 10 || num2 <= 20)
//Test whether the item is an array
let myList= ['Shazia', 'Robina' ,'Nazia', 5, 20 , 9];
let myCar= "BMW";
console.log("\n Now we are checking whether the item is an array or not: \n");
console.log(Array.isArray(myList));
console.log(Array.isArray(myCar));