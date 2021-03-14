let dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fitch balls"
};

let bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}

let speak = dog.name + " says " + bark + " when he wonts to " + dog.activity;
console.log(speak);