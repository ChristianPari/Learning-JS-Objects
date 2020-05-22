//! DIFFERENCE BETWEEN OBJECTS AND ARRAYS AND ANY STORAGE MECHANISM (variables; const; lets, arrays, objects) IS THE LEVEL OF COMPLEXITY OF WHICH YOU CAN STORE YOUR DATA
//^ EX. variable = 20; array = [20,10]; object = [{name: chris, age: 21}, {name: tyler, age:21}];
//Groceries is an array of objects. Each index is an object with it's own properties.

let groceries = [{
            name: `Apple`,
            fruit: true,
            price: 10,
            calories: 95

        },
        {
            name: `Banana`,
            fruit: true,
            price: 10,
            calories: 105

        },
        {
            name: `Carrot`,
            fruit: false,
            price: 5,
            calories: 41

        },
        {
            name: `Danish`,
            fruit: false,
            price: 15,
            calories: 106

        },
        {
            name: `Eggs`,
            fruit: false,
            price: 7,
            calories: 156

        },
        {
            name: `Fries`,
            fruit: false,
            price: 8,
            calories: 365

        },
        {
            name: `Gravy`,
            fruit: false,
            price: 14,
            calories: 236
        },
    ]
    // let allFruits = []; // for step 3

//1.)
// Create a function called listTheNames(param){..} that takes the array passed into it, and logs the name 
// of each object in that array to the screen.

function listTheNames(arr) {
    for (let a = 0; a < arr.length; a++) {
        console.log(arr[a].name);
    }
}
listTheNames(groceries);

//2.)
//Next, create a function called listTheFruits(param){..} that takes the groceries array as a parameter and logs the
//names of all the fruits in the array.

// function listTheFruits(arr) {
//     for (let b = 0; b < arr.length; b++) {
//         if (arr[b].fruit == true) {
//             console.log(`${arr[b].name} is a fruit.`);
//         } else {
//             console.log(`${arr[b].name} is not a fruit.`);
//         }
//     }
// }
// listTheFruits(groceries);
//^ This above code is to log wether each object within the groceries array is a fruit or not; "Blank is a fruit." "Blank is not a fruit."

function listTheFruits(arr) {
    for (let b = 0; b < arr.length; b++) {
        if (arr[b].fruit == true) {
            console.log(`${arr[b].name}`);
        }
    }
}
listTheFruits(groceries);

//3.)
//Next, create a function called getTheFruits(param){..} that returns a new array of all the fruits in the original array

// function getTheFruits(arr) {
//     for (let c = 0; c < arr.length; c++) {
//         if (arr[c].fruit == true) {
//             let newFruits = arr[c].name;
//             allFruits.push(newFruits);
//         }
//     }
//     console.log(allFruits);
// }
// getTheFruits(groceries);
//^ This code is to just push name data from the groceries array objects into a new array
//* the code below actually takes ALL the object data and pushes it into a new array

function getTheFruits(arr) {
    let allFruits = []; // a new array to push data to and then return
    for (let c = 0; c < arr.length; c++) {
        if (arr[c].fruit == true) {
            allFruits.push(arr[c]); // pushing data to the new array
        }
    }
    return allFruits; // when 'getTheFruits' function is called it is evaluating the entire function and outputting an expression
}
let myFruits = getTheFruits(groceries); // this will assign a new variable 'myFruits' to the function 'getTheFruits' output expression
console.log(getTheFruits(groceries)); // this will log the expression that the function 'getTheFruits' is outputting
console.log(myFruits); // logging the new variable data

//4.)
//Finally, list the name and calories of the object that has the most calories. Create the logic for this 'computationally',
//go through each object and compare the calories try to see if you can solve this challenge.



function highestCals(array) {

    let cals = []; // created an empty array to push each groceries calorie data into as numbers
    let highestCal = 0; // created a variable to become assigned to the calorie number that is the largest

    for (let d = 0; d < array.length; d++) {
        cals.push(array[d].calories); // pushes each piece of calorie data into the 'cals' array
    }
    highestCal = Math.max(...cals); // assigning the 'highestCal' variable to whatever the largest number is in the 'cals' array; Math.max extracts the largest number
    //^ the 'rest parameter' or ' 'spread operator': ...arguments; allows us to represent an indefinite number of arguments as an array, it unpacks an array.
    for (let e = 0; e < array.length; e++) {
        if (highestCal == array[e].calories) { // if 'highestCal' number is equal to a calorie measurement within the groceries array then...
            console.log(`The grocery with the most calories is ${array[e].name} and it has ${array[e].calories} calories.`);
            return array[e]; // needed if wanted to see output of this functions expression or wanted to log the function
        }
    }
}
highestCals(groceries);