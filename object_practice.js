let contacts = [{
    name: "Christian",
    number: 4012809090,
    age: 21
}, {
    name: "Tyler",
    number: 4018279009,
    age: 23
}, {
    name: "Caitlin",
    number: 4018766098,
    age: 21
}];

for (let a = 0; a < contacts.length; a++) {
    console.log(`${contacts[a].name} ${contacts[a].number}`);
}

console.log(contacts[2].number); // extract a specific property