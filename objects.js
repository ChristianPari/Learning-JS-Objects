// basic syntax of an object is: let object = {};
// an object is made of 'key value' pairs; called 'properties'.
// to refer to these properties you have to use 'Dot Notation'; 'object.value' ex/ person.name

// Ex
let person = {
    // value pairs are assigned with a ':' colon
    name: "Bob", // properties within an object are seperated by ',' commas
    age: 21,
    fav_food: "Pizza"
}; // semicolon is only needed at the end of the object, not within the object blocks data

console.log(`The person's name is ${person.name}, they are ${person.age} years old, and their favorite food is ${person.fav_food}.`);