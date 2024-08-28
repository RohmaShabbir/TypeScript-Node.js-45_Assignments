/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

//  Create a variable
let apple = "apple";

// Test for quality
console.log("Apple is equal to apple");
console.log( apple == "apple");

// test for inequality
console.log("Apple is not equal to apple");
console.log(apple !== "apple");

// Tests using the lower case function
let upperCaseApple = "APPLE";

// Equal to
console.log("APPLE is equal to apple after converting to lowerCase");
console.log(upperCaseApple.toLocaleLowerCase() == "apple");

// Not equal to
console.log("APPLE is not equal to apple after converting to lowerCase");
console.log(upperCaseApple.toLocaleLowerCase() !== "apple");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;

// Equal to
console.log("ten is equal to twenty");
console.log(ten == twenty);

// Not equal to
console.log("ten is not equal to twenty");
console.log(ten !== twenty);

// Greater than
console.log("twenty is graeter than ten");
console.log(twenty > ten);

// Less than
console.log("twenty is less than ten");
console.log(twenty < ten);

// Greater tan or equal to
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);

// Less than or equal to
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);

// Tests using "and" and "or" operators
// Using && (and)

console.log("twenty is not equal  than to ten and twenty is greater than ten");
console.log(twenty !== ten && twenty > ten );

console.log("twenty is  equal  than to ten and ten is greater than twenty");
console.log(twenty == ten && ten > twenty );

// Using || (or)

console.log("twenty is greater than ten or twenty is equal to twenty");
console.log(twenty > ten || twenty == twenty);

console.log("ten is greater than twenty or twenty is equal to ten");
console.log(ten > twenty || twenty == ten);

// Test whether an item is in a array

let fruites = ["Apple" , "Orange" , "Mange"];
console.log("Orange is include in my fruites array");
console.log(fruites.includes("Orange"));

// Test whether an item is not in a array

console.log("Orange is not include in my fruites array");
console.log(!fruites.includes("Orange"));



















