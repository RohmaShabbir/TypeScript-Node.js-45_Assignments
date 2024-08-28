/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

// First Version:

let alien_color = "Green";

if (alien_color === "Green"){
    console.log("(Version 1) Alien color is green , player earned 5 points");

} else if (alien_color === "Yellow"){
    console.log("(Version 1) Alien color is yellow , player earned 10 points");
    
}else if (alien_color === "Red"){
    console.log("(Version 1) Alien color is red , player earned 15 points");
}

// Second Version:

let alien_color = "Yellow";

if (alien_color === "Green"){
    console.log("(Version 2) Alien color is green , player earned 5 points");

} else if (alien_color === "Yellow"){
    console.log("(Version 2) Alien color is yellow , player earned 10 points");
    
}else if (alien_color === "Red"){
    console.log("(Version 2) Alien color is red , player earned 15 points");
}

Third Version:

let alien_color = "Red";

if (alien_color === "Green"){
    console.log("(Version 3) Alien color is green , player earned 5 points");

} else if (alien_color === "Yellow"){
    console.log("(Version 3) Alien color is yellow , player earned 10 points");
    
}else if (alien_color === "Red"){
    console.log("(Version 3) Alien color is red , player earned 15 points");
}