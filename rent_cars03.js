// create an array of available cars. create a function where we pass a name to the function
// if the car name is present, log that that car is available

// if the car is available, remove it from the available cars and put that car into a rented cars array

let availableCars = ["Honda", "Toyota", "Chevy"];
let rentedCars = [];

function rentCar(name) {
    for (let a = 0; a < availableCars.length; a++) {
        if (name == availableCars[a]) {
            console.log(`The ${name} is available.`);
            // now that it's available, move to rented cars array
            let rentedCar = availableCars.splice(a, 1); // creates a variable to put the car that's being rented into
            rentedCars.push(rentedCar[0]); // pushes the car that was rented into the rented cars array
        }
    }
}
rentCar("Toyota");
rentCar("Honda");
console.log(rentedCars);
console.log(availableCars);