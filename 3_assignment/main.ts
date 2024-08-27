// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "rohma Shabbir";
console.log("Lovercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Tittlecase", personName.replace(/\b\w/g, c=> c.toUpperCase()));



