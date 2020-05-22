// this program will have a 3 element array of "items"
// another array of each element's price
// another array which is empty called "purchasedItems"
// then a function called "findItem()" which takes a parameter
// if you can afford log it and say leftover cash
// log to the terminal if the item is available in a "availableItems" array
// UPDATE: update your findItem() to take two parameters instead of one. The first param is the name of the item. The 2nd param is the quantity you
// want to purchase of that item. Console log the total price of the purchase and if we can afford it or not.
//! Updating to use objects instead of arrays

//* let items = ["Cheese", "Fries", "Soda"];
//* let itemPrices = [2, 2, 1];
let items = [{
    product: "Cheese",
    price: 2
}, {
    product: "Fries",
    price: 2
}, {
    product: "Soda",
    price: 1
}];

let cash = 3;
let purchasedItems = [];

function findItem(item, quantity) {
    let isExist = false;
    let canAfford = false;
    //! WHEN USING A FOR LOOP THR [i] IS PLACED BEFORE THE DOT NOTATION
    for (let a = 0; a < items.length; a++) {
        if (item === items[a].product) {
            isExist = true;
            if (cash >= items[a].price * quantity) {
                canAfford = true;
            }
        }
    }
    if (isExist == true) {
        console.log(`${item} is in stock.`);
        if (canAfford == true) {
            console.log(`I can afford ${item}.`);
            for (let b = 0; b < items.length; b++) {
                if (item === items[b].product) {
                    console.log(`The total purchase will be $${items[b].price * quantity}. Your change will be $${cash - (items[b].price * quantity)}.`);
                    cash = cash - (items[b].price * quantity);
                    purchasedItems.push(" " + items[b].product);
                    console.log(`You have purchased${purchasedItems}. Thank you, please come again.`);
                }
            }
        } else {
            console.log(`Although, we cannot afford ${item}.`);
        }
    } else {
        console.log(`${item} isn't in stock.`);
    }
}

findItem("Cheese", 2);
findItem("Soda", 1);
findItem("Bread");
findItem("Fries", 1);