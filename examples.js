let items = [
    { name: "Book", price: 9 },
    { name: "Laptop", price: 1000 },
    { name: "Pencil", price: 3 },
];

let thresholdPrice = 100;

// Implement a function to find the first item with price greater than thresholdPrice
function expensiveProduct(array, threshold) {
   return array.find(item => {return item.price > threshold});
}

console.log(expensiveProduct(items, thresholdPrice));