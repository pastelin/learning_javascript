// Task 1
var dairy = [
    'cheese',
    'sour cream',
    'milk',
    'yogurt',
    'ice cream',
    'milkshake',
];

function logDairy() {
    for (let value of dairy) {
        console.log(value);
    }
}

logDairy();

// Task 2

const animal = {
    canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan () {
	for(let value of Object.keys(bird)) {
		console.log(`${value}: ${bird[value]}`);
	}
}

birdCan();

// Task 3
function animalCan () {
	for(let value of Object.keys(bird)) {
		console.log(`${value}: ${bird[value]}`);
	}

	for(let value of Object.keys(animal)) {
		console.log(`${value}: ${animal[value]}`);
	}
}

animalCan();