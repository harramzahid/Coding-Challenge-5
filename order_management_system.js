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
    customerName: 'Mia',
    items: [
        { productName: 'Mocha', quantity: 1 },
        { productName: 'Latte', quantity: 2 }
    ],
    status: 'Pending'
};

// Adding the example order to the orders array
orders.push(order);

// Task 3 Create a fucntion to place an order
function placeOrder(customerName, itemsOrdered,)  {
    itemsOrdered.forEach(item => {
        let product = inventory.find(product => product.name === item.name);
        if (!product || product.quantity < item.quantity) {
            return `error: requested item ${item.name} is unavailable, sorry!`
        } else {
            return product.quantity -= item.quantity
        }})
        
    orders.push({
        customerName,
        items: itemsOrdered,
        status: 'Pending'
        });
    }

// Task 4 Create a Function to Calculate Total for an Order
function calculateOrderTotal(order) {
    return order.productName.reduce((sum, ProductName) => {
        const product = inventory.find(product => productName === item.name);
        return sum + (product.price * item.quantity)
    }, 0)
};

//Task 5 Create a Function to Mark an Order as Completed
function completeOrder(customerName) {
    let order = orders.find(order => order.customerName === customerName);
    
    if (order) {
        // Update the order status to "Completed"
        order.status = 'Completed';
        console.log(`Order for ${customerName} has been marked as Completed.`);
    } else {
        console.error(`Error: No order found for ${customerName}.`);
    }
}
//
