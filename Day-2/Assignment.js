// Question 1: The Guest List Formatter
// Goal: Practice Template Literals and Array Methods.

// Write a function called formatGuests that takes an array of names. The function should:

// Remove the first name from the list (it’s the host, not a guest).
// Add "Guest: " before each remaining name using .map().
// Return a single string where each guest is on a new line.
//  


// Solution 1


function formatGuests(arr) {
    arr.shift();
    let guests = arr.map(name => `Guest: ${name}`);
    return guests.join("\n"); 
}
let names = ["Aryan", "Prabhav", "Rahul"];
console.log(formatGuests(names));




// Question 2: The Logic Gate (Filter & Math)
// Goal: Practice Arrow Functions, filter, and Math methods.
// Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and:
// Filter the array to keep only the numbers.
// Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
// Return the final array.



// Solution 2


const getHighNumbers = (arr) => {
    let numbers = arr.filter(x => typeof x === "number");
    let threshold = Math.floor(Math.random() * 50) + 1;
    console.log("Threshold:", threshold);
    let result = numbers.filter(x => x > threshold);

    return result;
};
let data = [10, "hello", 45, 60, "Aryan", 5, 100, 30];
console.log("Final Output:", getHighNumbers(data));





// Question 3: The Price Calculator
// Goal: Practice Type Conversion and splice.
// You have an array of prices, but they are currently strings. Write a script that:
// Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately).
// Converts the remaining string prices into actual numbers.
// Calculates the sum of those numbers using an arrow function.
// Prints: "Total Price: $[sum]" using a template literal.



// Solution 3 


const Sum = (arr) => arr.reduce((sum, val) => sum + val, 0);
let prices = ["10", "20", "30", "500"]; 
let HandlingFee = prices.splice(prices.length - 1, 1);
let numericPrices = prices.map(x => Number(x));
let total = Sum(numericPrices);
console.log(`Total Price: $${total}`);
console.log(`Handling Fee: $${HandlingFee}`);