"use strict";
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time. */
function makeSandwich(...items) {
    console.log("\n Making a Sandwiches with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwiches");
}
makeSandwich("Bread", "Butter");
makeSandwich("Cicken", "Cheese", "Egg");
makeSandwich("Bread", "Butter", "Cicken", "Mayo", "Cheese", "Egg", "Tomato");
