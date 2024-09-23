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

//Task 3 Create a Function to Place an Order
function placeOrder(customerName, itemsOrdered,)  {
    itemsOrdered.forEach(item => {
        let product = inventory.find(product => product.name === item.name);
        if (!product || product.quantity < item.quantity) {
            return `error: ietm ${item.name} is out of stock sorry!`
        } else {
            return product.quantity -= item.quantity
        }})
        
    orders.push({
        customerName,
        items: itemsOrdered,
        status: 'pending'
        });
    }

//