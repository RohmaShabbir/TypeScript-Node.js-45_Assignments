"use strict";
/* Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name. */
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The greate ${name}`);
}
let magicians_name = ["Ali", "Osama", "Asif"];
let copy_magicians_name = magicians_name.slice();
let copy_greate_magicians = make_great(copy_magicians_name);
console.log("\nOriginal Array\n");
show_magicians(magicians_name);
console.log("\nCopied Array\n");
show_magicians(copy_greate_magicians);
