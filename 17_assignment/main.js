"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ['Hina', 'Yumna', 'Ali', 'Haniya', 'Rehma', 'Neha'];
// print message
console.log("Unfortunately! the new dinner tablbe won't arrive so we can invite only two guest.");
// Remove guest from the list
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(` Sorry ${removeGuest}, we can't invite you.`);
    }
}
// Print a message to each of the two people still on your list.
// letting them know they’re still invited.
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still ivited for the dinner`);
});
// Remove last two guest
guestList.splice(0, guestList.length);
// Print updated empty list
console.log("Update list of guest :", guestList);
