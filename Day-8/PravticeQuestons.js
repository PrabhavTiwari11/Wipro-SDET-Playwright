// 1. Create a program that swaps two numbers without using a third variable. 

let a = 10;
let b = 20;
console.log("Before Swap:");
console.log("a =", a);
console.log("b =", b);
a = a + b; 
b = a - b; 
a = a - b; 
console.log("After Swap:");
console.log("a =", a);
console.log("b =", b);



// 2. Write a program to check whether a given value is a number, string, boolean, null, or 
// undefined. 

let value = null;

if (value === null) {
    console.log("Type is null");
} 
else if (value === undefined) {
    console.log("Type is undefined");
} 
else {
    console.log("Type is", typeof value);
}



// 3. Convert temperature from Celsius to Fahrenheit using variables. 

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log(celsius + "°C =", fahrenheit + "°F");


// 4. Create a simple calculator using variables and arithmetic operators. 

let num1 = 15;
let num2 = 5;

console.log("Addition =", num1 + num2);
console.log("Subtraction =", num1 - num2);
console.log("Multiplication =", num1 * num2);
console.log("Division =", num1 / num2);


// 5. Write a program that takes a user’s birth year and calculates age.

let birthYear = 2003;
let currentYear = 2026;

let age = currentYear - birthYear;

console.log("Your age is:", age);


// 1. Reverse a string without using built-in reverse methods. 

let str1 = "hello";
let reversed = "";

for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}

console.log("Reversed String:", reversed);

// 2. Count the number of vowels in a string.

let str2 = "JavaScript";
let count = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < str2.length; i++) {
    if (vowels.includes(str2[i])) {
        count++;
    }
}

console.log("Number of vowels:", count);

// 3. Check whether a string is a palindrome. 

let str3 = "madam";
let reverseStr = "";

for (let i = str3.length - 1; i >= 0; i--) {
    reverseStr += str3[i];
}

if (str3 === reverseStr) {
    console.log(str3 + " is a Palindrome");
} else {
    console.log(str3 + " is not a Palindrome");
}


// 4. Capitalize the first letter of every word in a sentence. 

let sentence = "welcome to javascript world";
let words = sentence.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
}

console.log("Capitalized Sentence:", result.trim());

// 5. Find the longest word in a sentence. 

let sentence2 = "I love learning JavaScript programming";
let wordArray = sentence2.split(" ");
let longest = "";

for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longest.length) {
        longest = wordArray[i];
    }
}

console.log("Longest Word:", longest);

// 1. Generate a random number between 1 and 100. 

let randomNum = Math.floor(Math.random() * 100) + 1;

console.log("Random Number:", randomNum);

// 2. Check whether a number is prime. 

let num1 = 17;
let isPrime = true;

if (num1 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num1 + " is a Prime Number");
} else {
    console.log(num1 + " is not a Prime Number");
}


// 3. Find factorial of a number using loops. 

let num2 = 5;
let factorial = 1;

for (let i = 1; i <= num2; i++) {
    factorial *= i;
}

console.log("Factorial of", num2, "is:", factorial);

// 4. Find Fibonacci series up to n numbers. 

let n = 10;
let first = 0;
let second = 1;

console.log("Fibonacci Series:");

for (let i = 1; i <= n; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}

// 5. Check whether a number is Armstrong number. 

let num3 = 153;
let temp = num3;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
}

if (sum === num3) {
    console.log(num3 + " is an Armstrong Number");
} else {
    console.log(num3 + " is not an Armstrong Number");
}


// 1. Find the largest and smallest number in an array. 

let arr1 = [12, 45, 7, 89, 23, 5];

let largest = arr1[0];
let smallest = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        largest = arr1[i];
    }

    if (arr1[i] < smallest) {
        smallest = arr1[i];
    }
}

console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);

// 2. Remove duplicate elements from an array.

let arr2 = [1, 2, 3, 2, 4, 5, 1, 6];
let unique = [];

for (let i = 0; i < arr2.length; i++) {
    if (!unique.includes(arr2[i])) {
        unique.push(arr2[i]);
    }
}

console.log("Array without duplicates:", unique);

// 3. Sort an array without using built-in sort(). 

let arr3 = [5, 2, 8, 1, 9, 3];

for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length - 1; j++) {
        if (arr3[j] > arr3[j + 1]) {
            let temp = arr3[j];
            arr3[j] = arr3[j + 1];
            arr3[j + 1] = temp;
        }
    }
}

console.log("Sorted Array:", arr3);

// 4. Find second largest number in an array. 

let arr4 = [10, 25, 47, 89, 65, 89];
let firstLargest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = arr4[i];
    } 
    else if (arr4[i] > secondLargest && arr4[i] !== firstLargest) {
        secondLargest = arr4[i];
    }
}

console.log("Second Largest Number:", secondLargest);

// 5. Merge two arrays and remove duplicates. 

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let merged = [...array1, ...array2];
let finalArray = [];

for (let i = 0; i < merged.length; i++) {
    if (!finalArray.includes(merged[i])) {
        finalArray.push(merged[i]);
    }
}

console.log("Merged Array without duplicates:", finalArray);


// 1. Create an object for a student and display all properties dynamically.

let student = {
    name: "Prabhav",
    age: 22,
    course: "BTech CSE",
    city: "Prayagraj"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}

// 2. Count number of keys in an object. 

let obj = {
    name: "Laptop",
    brand: "HP",
    price: 55000
};

let count = 0;

for (let key in obj) {
    count++;
}

console.log("Number of keys:", count);

// 3. Merge two objects into one. 

let obj1 = {
    name: "John",
    age: 25
};

let obj2 = {
    city: "Delhi",
    profession: "Developer"
};

let mergedObject = { ...obj1, ...obj2 };

console.log("Merged Object:", mergedObject);

// 4. Convert an object into an array of keys and values. 

let person = {
    name: "Rahul",
    age: 24,
    city: "Noida"
};

let keys = Object.keys(person);
let values = Object.values(person);

console.log("Keys Array:", keys);
console.log("Values Array:", values);

// 5. Create a shopping cart object and calculate total bill amount. 

let cart = {
    item1: {
        name: "Shoes",
        price: 2000,
        quantity: 2
    },
    item2: {
        name: "T-shirt",
        price: 800,
        quantity: 3
    },
    item3: {
        name: "Watch",
        price: 1500,
        quantity: 1
    }
};

let totalBill = 0;

for (let item in cart) {
    totalBill += cart[item].price * cart[item].quantity;
}

console.log("Total Bill Amount:", totalBill);


// 1. Print star pyramid patterns. 

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
}

// 2. Print multiplication tables from 1 to 10. 

for (let i = 1; i <= 10; i++) {
    console.log("Table of", i);

    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }

    console.log("------------------------");
}


// 3. Find sum of all even numbers between 1 and 100. 

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("Sum of even numbers from 1 to 100:", sum);


// 4. Print all prime numbers between 1 and 100. 

console.log("Prime numbers between 1 and 100:");

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

// 5. Create a number guessing game using loops. 


let secretNumber = 7;
let guess = 0;

while (guess !== secretNumber) {
    guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess > secretNumber) {
        console.log("Too High!");
    } 
    else if (guess < secretNumber) {
        console.log("Too Low!");
    } 
    else {
        console.log("Correct! You guessed the number.");
    }
}


// 1. Create a function that returns the greatest of three numbers. 

function greatestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } 
    else if (b >= a && b >= c) {
        return b;
    } 
    else {
        return c;
    }
}

console.log("Greatest Number:", greatestOfThree(25, 47, 18));

// 2. Write a function to check whether a number is palindrome. 

function isPalindromeNumber(num) {
    let original = num;
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    if (original === reverse) {
        return original + " is a Palindrome Number";
    } else {
        return original + " is not a Palindrome Number";
    }
}

console.log(isPalindromeNumber(121));

// 3. Create a reusable function for currency conversion. 

function currencyConverter(amount, rate) {
    return amount * rate;
}

let rupees = 1000;
let dollarRate = 0.012; // Example rate

console.log("Converted Currency:", currencyConverter(rupees, dollarRate));

// 4. Write a function that accepts an array and returns only even numbers. 

function getEvenNumbers(arr) {
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}

console.log("Even Numbers:", getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// 5. Create a calculator using functions for add, subtract, multiply, and divide.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));



// 1. Predict output of variable hoisting examples. 

console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20

// 2. Create examples showing block scope using let. 


{
    let x = 50;
    console.log("Inside block:", x); // Output: 50
}

console.log(x); // Error: x is not defined

// 3. Write a program demonstrating closure behavior. 

function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        console.log("Count:", count);
    }

    return innerFunction;
}

let counter = outerFunction();

counter(); 
counter(); 
counter(); 

// 4. Create nested functions and access outer variables. 

function parentFunction() {
    let parentName = "Parent Variable";

    function childFunction() {
        console.log("Accessing:", parentName);
    }

    childFunction();
}

parentFunction();

// 5. Debug a program with incorrect variable scoping.

// Incorrect Code:
/*
function testScope() {
    if (true) {
        var message = "Hello";
    }

    console.log(message); 
}

testScope();
*/

// Correct Code using let:

function testScope() {
    if (true) {
        let message = "Hello";
        console.log(message); // Output: Hello
    }

    console.log(message); // Error: message is not defined
}

testScope();


// 1. Create a delayed greeting message using setTimeout. 

setTimeout(function () {
    console.log("Hello! Welcome to JavaScript.");
}, 2000); 


// 2. Build a countdown timer. 

let count = 5;

let timer = setInterval(function () {
    console.log(count);

    count--;

    if (count === 0) {
        console.log("Time's up!");
        clearInterval(timer);
    }
}, 1000);


// 3. Create a callback-based calculator. 

function calculator(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", calculator(10, 5, add));
console.log("Subtraction:", calculator(10, 5, subtract));
console.log("Multiplication:", calculator(10, 5, multiply));
console.log("Division:", calculator(10, 5, divide));


// 4. Simulate food ordering system using callbacks. 

function orderFood(foodItem, callback) {
    console.log("Order placed for:", foodItem);

    setTimeout(function () {
        console.log(foodItem + " is ready.");
        callback();
    }, 3000);
}

function serveFood() {
    console.log("Food served to customer.");
}

orderFood("Pizza", serveFood);

// 5. Execute functions sequentially using callbacks. 

function stepOne(callback) {
    setTimeout(function () {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function stepTwo(callback) {
    setTimeout(function () {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function stepThree() {
    setTimeout(function () {
        console.log("Step 3 completed");
    }, 1000);
}

stepOne(function () {
    stepTwo(function () {
        stepThree();
    });
});



// 1. Convert normal functions into arrow functions. 

// Normal Function
function add(a, b) {
    return a + b;
}

// Arrow Function
const addArrow = (a, b) => {
    return a + b;
};

console.log("Addition:", addArrow(10, 5));

// 2. Create one-line arrow functions with implicit return. 

const square = num => num * num;

console.log("Square:", square(6));

const greet = name => `Hello, ${name}`;

console.log(greet("Prabhav"));

// 3. Use arrow functions with map(). 

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);

console.log("Squared Array:", squares);


// 4. Build an even/odd checker using arrow functions. 

const checkEvenOdd = num => 
    num % 2 === 0 ? "Even Number" : "Odd Number";

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(7));

// 5. Create a student grade calculator using arrow functions.

const calculateGrade = marks => {
    if (marks >= 90) {
        return "Grade A";
    } 
    else if (marks >= 75) {
        return "Grade B";
    } 
    else if (marks >= 50) {
        return "Grade C";
    } 
    else {
        return "Fail";
    }
};

console.log("Student Grade:", calculateGrade(82));

// 1. Double all numbers in an array using map(). 

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(num => num * 2);

console.log("Doubled Numbers:", doubledNumbers);

// 2. Filter all students scoring above 80 marks. 

let students = [
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 88 },
    { name: "Aman", marks: 92 },
    { name: "Sneha", marks: 67 }
];

let topStudents = students.filter(student => student.marks > 80);

console.log("Students scoring above 80:");
console.log(topStudents);

// 3. Print all array values using forEach(). 

let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.forEach(fruit => {
    console.log(fruit);
});

// 4. Convert array of names into uppercase. 

let names = ["prabhav", "rahul", "priya", "aman"];

let upperCaseNames = names.map(name => name.toUpperCase());

console.log("Uppercase Names:", upperCaseNames);

// 5. Extract only even numbers using filter(). 

let arr = [10, 15, 20, 25, 30, 35, 40];

let evenNumbers = arr.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);

// 1. Create examples showing primitive copying behavior. 


let a = 10;
let b = a; 

b = 20;

console.log("a =", a); 
console.log("b =", b); 


// 2. Create examples showing object reference behavior. 

let person1 = {
    name: "Prabhav",
    age: 22
};

let person2 = person1; 

person2.age = 25;

console.log("person1 =", person1); // age becomes 25
console.log("person2 =", person2);


// 3. Clone an object without affecting original object. 

let original = {
    name: "Rahul",
    city: "Delhi"
};

let cloned = { ...original }; 

cloned.city = "Noida";

console.log("Original Object:", original);
console.log("Cloned Object:", cloned);


// 4. Compare arrays using reference equality. 

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2); 
console.log(arr1 === arr3); 


// 5. Demonstrate shallow copy using spread operator. 


let student = {
    name: "Aman",
    address: {
        city: "Lucknow"
    }
};

let copiedStudent = { ...student };

copiedStudent.name = "Ravi";
copiedStudent.address.city = "Kanpur";

console.log("Original Student:", student);
console.log("Copied Student:", copiedStudent);






// 1. Create examples showing stack memory behavior. 

let a = 10;
let b = a;

b = 20;

console.log("a =", a); 
console.log("b =", b); 


// Here b gets a copy of a's value.




// 2. Create examples showing heap memory references. 



let obj1 = {
    name: "Prabhav"
};

let obj2 = obj1;

obj2.name = "Rahul";

console.log("obj1 =", obj1); 
console.log("obj2 =", obj2);






// 3. Demonstrate object mutation through references. 

let student1 = {
    name: "Aman",
    marks: 80
};

let student2 = student1;

student2.marks = 95;

console.log("student1 =", student1); 
console.log("student2 =", student2);



// 4. Predict outputs of memory-related programs. 


let x = 5;
let y = x;

y = 15;

console.log(x); 
console.log(y); 

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); 
console.log(arr2);


// 5. Create diagrams explaining memory allocation. 




// 1. Trace execution order of nested function calls. 

function first() {
    console.log("First function started");
    second();
    console.log("First function ended");
}

function second() {
    console.log("Second function started");
    third();
    console.log("Second function ended");
}

function third() {
    console.log("Third function executed");
}

first();


// 2. Create recursive factorial function. 

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log("Factorial:", factorial(5)); 


// 3. Build recursive Fibonacci function. 

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci:", fibonacci(6)); 


// 4. Simulate stack overflow with recursion. 

function infiniteRecursion() {
    console.log("Function calling itself...");
    infiniteRecursion();
}




// 5. Draw call stack flow for nested functions. 




// 1. Convert JSON string into object. 

let jsonString = '{"name":"Prabhav","age":22,"city":"Prayagraj"}';

let userObject = JSON.parse(jsonString);

console.log("Object:", userObject);
console.log("Name:", userObject.name);


// 2. Convert object into JSON string. 

let student = {
    name: "Rahul",
    age: 21,
    course: "BTech"
};

let jsonData = JSON.stringify(student);

console.log("JSON String:", jsonData);



// 3. Parse API-like JSON data and display values.

let apiResponse = `{
    "id": 101,
    "name": "Aman",
    "email": "aman@example.com",
    "isActive": true
}`;

let parsedData = JSON.parse(apiResponse);

console.log("ID:", parsedData.id);
console.log("Name:", parsedData.name);
console.log("Email:", parsedData.email);
console.log("Active:", parsedData.isActive);


// 4. Create a JSON array of employee records. 

let employees = [
    {
        id: 1,
        name: "Priya",
        department: "HR",
        salary: 30000
    },
    {
        id: 2,
        name: "Ravi",
        department: "IT",
        salary: 45000
    },
    {
        id: 3,
        name: "Sneha",
        department: "Finance",
        salary: 40000
    }
];

console.log("Employee Records:", employees);


// 5. Filter JSON data based on conditions. 

let highSalaryEmployees = employees.filter(employee => employee.salary > 35000);

console.log("Employees with salary above 35000:", highSalaryEmployees);

