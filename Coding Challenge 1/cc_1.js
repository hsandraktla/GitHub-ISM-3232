// Task 1: Employee Information
// Declare a variable employeeName using let and assign it the employee's name as a string.
let employeeName = "Zachary Keenan";
// Declare a variable employeeID using const and assign it the employee's ID as a number.
const employeeID = 081303;
// Declare a variable isActive using var and assign it a boolean value true to indicate the employee is currently active.
var isActive = true;
// Log each variable's value and its type to the console using console.log() and typeof.
console.log("Employee Name:", employeeName, "-", typeof employeeName);
console.log("Employee ID:", employeeID, "-", typeof employeeID);
console.log("Active Status:", isActive, "-", typeof isActive);


//Task 2: Product Details
// Declare a variable productName using let and assign it a string value representing the product's name.
let productName = "Wedding Dress";
// Declare a variable productPrice using const and assgin it a numerical value representing the product's price.
const productPrice = 3599;
// Declare a variable isAvailable using var and assign it a boolean value indicating product availability.
var isAvailable = false;
// Log each variable's value and its type to the console.
console.log("Product Name:", productName, "-", typeof productName);
console.log("Product Price:", productPrice, "-", typeof productPrice);
console.log("Product Availability;", isAvailable, "-", typeof isAvailable);


//Task 3: Financial Transactions
// Declare a variable accountBalance using let and assign it a number representing the initial balance.
let accountBalance = 5725;
// Perform a basic arithmetic operations and log the updated values.
accountBalance +=3589; //Deposit
console.log("Account Balance after Deposit:", accountBalance);
accountBalance -=1250; //Withdrawal
console.log("Account Balance after Withrawal:", accountBalance);
accountBalance *=1.5; //Interest
console.log("Account Balance after Interest:", accountBalance);
accountBalance /=2; //Slpit in half
console.log("Account Balance in Half:", accountBalance);


//Task 4: Customer Messaging
// Declare a variable customerName using let and assign it a string value representing the customer's name.
let customerName = "Rosella Ktla";
// Concatenate strings to form a welcome message and log it to the console.
let welcomeMessage = "Welcome " + customerName + "! " + "We are thrilled to have you on board.";
console.log(welcomeMessage);