// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placeToVisit: string[] = ["London", "France", "Dubai", "Italy", "Paris"];

// print original order
console.log("Original Order:", placeToVisit);

// Print array in  alphabetical order
console.log("Alphabetical Order:", placeToVisit.slice().sort());

// Array is still in its original order
console.log("Original Order after sorting:", placeToVisit);

// Print  array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical Order:", placeToVisit.slice().sort().reverse());

// Array is still in its original order
console.log("Original Order after reverse sorting:", placeToVisit);

// Reverse the order of your list
placeToVisit.reverse()
console.log("Reverse order:" , placeToVisit);

//  Reverse the order of list again
placeToVisit.reverse()
console.log("Back to original order:" , placeToVisit);

// Sort array so it’s stored in alphabetical order
console.log("Stored in alphabetical order:", placeToVisit.slice().sort());

// Sort to change array so it’s stored in reverse alphabetical order
console.log("Stored in reverse alphabetical Order:", placeToVisit.slice().sort().reverse());