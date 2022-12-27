// Task 1
const dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (item of dairy) {
        console.log(item)
    }
}

// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const[prop, value] of Object.entries(bird)) {
        console.log(`${prop}: ${value}`)
    }
}

// Task 3
function animalCan() {
    for (const prop in bird) {
        console.log(`${prop}: ${bird[prop]}`)
    }
}