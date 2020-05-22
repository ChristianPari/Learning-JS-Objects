// OBJECTIVE: We have a list of cars, each with a price and model.
// We also will have a 'cash' variable that will determine if we can actually rent the car for that many days.
//* We will create a function where we pass the name of the car we want to rent and for how many days we want to rent it for.
//* How much money do we have? Is the car available and for how much a day? Can we afford it? How much cash would be leftover if we can afford it?
//* A FUNCTION NEEDS A UNIQUE NAME
//* NOW convert this program to use objects instead of arrays

let rentalCars = [{
    carName: "Honda",
    carPrice: 150
}, {
    carName: "Toyota",
    carPrice: 100
}, {
    carName: "Chevy",
    carPrice: 200
}];
let rentedCars = [];
let cash = 575;

console.log(`We have $${cash} and need to rent a car.\n`);

// function to take two parameters 'car name' and 'days rented'
function rentACar(name, daysRented) { // the parameters will receive the data from the function when its called
    let isExist = false; // gives the variable a default value of false
    let carCost = 0; // created to assign a cars daily cost
    let carCostTotals = 0; // created to assign a cars total cost for the wanted rent period
    let leftoverCash = 0; // created to see how much cash we leftover

    for (let a = 0; a < rentalCars.length; a++) {
        if (name == rentalCars[a].carName) {
            isExist = true;
            carCost = rentalCars[a].carPrice;
        }
    }

    if (isExist == true) {
        console.log(`The ${name} is available and cost $${carCost} per day.`);
        for (let a = 0; a < rentalCars.length; a++) {
            carCostTotals = rentalCars[a].carPrice * daysRented;
            leftoverCash = cash - (carCostTotals);
            if (name == rentalCars[a].carName) {
                console.log(`The ${name} is available.`);
                if (cash >= (rentalCars[a].carPrice * daysRented)) {
                    console.log(`It will cost $${carCostTotals} to rent the ${name}.`);
                    console.log(`We can afford the ${name}!`);
                    console.log(`We would have $${leftoverCash} in leftover cash after renting this vehicle.\n`)
                    let rentedCar = rentalCars.splice(a, 1)
                    rentedCars.push(rentedCar[0]);
                    cash = leftoverCash;
                } else {
                    console.log(`It will cost $${carCostTotals} to rent the ${name}.`);
                    console.log(`We cannot afford ${name}.\n`);
                }
            }
        }
        // console.log(`The vehicles we could rent are the:${rentedCars}.\n`);
    } else {
        console.log(`The ${name} isn't available.\n`);
    }

    if (isExist == false) {
        console.log(`We do not offer ${name} here, please choose a car from our available cars list, thank you.\n`);
    }
}
rentACar("Honda", 3);
rentACar("Cadillac");
rentACar("Toyota", 1);
rentACar("Chevy", 3);
console.log(rentedCars);
console.log(rentalCars);