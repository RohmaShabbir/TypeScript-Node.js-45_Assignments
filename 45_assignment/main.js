/* Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly. */
// Define the function to create a car object
function createCar(manufacturer, model, options) {
    const car = {
        manufacturer: manufacturer,
        model: model,
        ...options // Spread operator to include additional properties
    };
    return car;
}
// Example usage
const myCar = createCar('Toyota', 'Corolla', { color: 'Black', sunroof: true });
// Print the car object to make sure all information is stored correctly
console.log(myCar);
export {};
// function create_car(manufacturere, model, ...options){
//     let car = {
//         manufacturere : manufacturere,
//         model : model
//     }
//     options.forEach(option => {
//         let [key , value] = option.split(":")
//         car [key.trim()] = value.trim()
//     });
//     return car;
// }
// let my_car = create_car("Toyota" , "corolla", "Color: Black" , "Sunroof : True")
// console.log(my_car);
