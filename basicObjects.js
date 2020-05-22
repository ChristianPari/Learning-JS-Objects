// create an object called person. this person will have a name, age, weight, height and money properties.

let person = {
    name: "Billy",
    age: 26,
    weight: 152,
    height: 84,
    money: 2.50,
    //^ can also use functions inside objects, and you can stack upon stack objects "but we'll get there" -Cido lol
    sayHello: function() { //! function inside a object is called a METHOD
        console.log(`Hello, my name is ${person.name}.`);
    }
}

// after creating it, log each property of that person

// console.log(person.name, person.age, person.weight, person.height, person.money);
// person.sayHello();

// create two objects called item1 and item2. these objects have a price and name property.
// create a function called buyItem(item). pass one of the items we defined into the function. if person can afford it, log "Thank you for your purchase".

let item1 = {
    name: "Snickers",
    price: 2.25
}
let item2 = {
    name: "Kit-Kat",
    price: 2.60
}

function buyItem(item) {
    if (person.money >= item.price) {
        console.log(`Thank you for your purchase.`);
    } else {
        console.log(`You can't afford this item.`);
    }
}

buyItem(item1);
buyItem(item2);