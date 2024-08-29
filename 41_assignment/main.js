"use strict";
/* Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
function show_magicians(Magicians) {
    Magicians.forEach(name => console.log(name));
}
let Magicians_names = ["Ali", "Osama", "Asif"];
show_magicians(Magicians_names);
