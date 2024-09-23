//TASK 1 Create an Inventory Array of Product Objects
const inventory = [

    { name: 'Espresso', price: 3, quantity: 10 },  
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 }
    
    ];

// console.log(inventory);
// here, for task one I have innitialized an inventory

// Task 2 Create an Orders Array of Order Objects
let orders = [];

// Example of an order object to be added to the orders array
let order = {
    customerName: "Mia",
    items: [
        { productName: "Mocha", quantity: 1 },
        { productName: "Latte", quantity: 2 }
    ],
    status: "Pending"
};

// Adding the example order to the orders array
orders.push(order);
