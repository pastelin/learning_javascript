// Given variables
const dishData = [
    {
        name: 'Italian pasta',
        price: 9.55,
    },
    {
        name: 'Rice with veggies',
        price: 8.65,
    },
    {
        name: 'Chicken with potatoes',
        price: 15.55,
    },
    {
        name: 'Vegetarian Pizza',
        price: 6.45,
    },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
    if (typeof taxBoolean !== 'boolean') {
        console.log('You need to pass a boolean to getPrices call!');
        return;
    }

    dishData.forEach((dish) => {
        const finalPrice = taxBoolean ? dish.price * tax : dish.price;
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    });
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;

        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }

        console.log(`Discount is: $${discount}`);
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
// getDiscount(true, 4);
// getDiscount(false, 5);
// getDiscount(true, 31);
// getDiscount(true, '5');
// getDiscount(true, -5);
// getDiscount(true, 0);
// getDiscount(true, 30);
getDiscount();
