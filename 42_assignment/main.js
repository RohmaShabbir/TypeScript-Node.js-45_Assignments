"use strict";
/* Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The greate ${name}`);
}
let magicians_name = ["Ali", "Osama", "Asif"];
let greate_magicians = make_great(magicians_name);
show_magicians(greate_magicians);
