//Task 1: Store Inventory
//Declare an array products using let and initialize it with at least five product names.
let products = ["Dress", "Croptop", "Jeans", "Sweater", "Shoes"];
//Add a new product to the array. 
products.unshift("Skirt");
//Remove the last product from the array.
products.pop();
//Log the updated product list to the console.
console.log("Updated Product List: ", products);


//Task 2: Student Scores
//Delare an array scores with at least five numerical values.
let scores = [85, 90, 100, 75, 80];
//Update the second score in the array.
scores[1] = 95;
//Calculate the average of all scores.
let totalScores = scores.reduce((sum, scores) => sum + scores, 0);
let averageScores = totalScores / scores.length;
//Log the updated array and the average score to the console.
console.log("Updated Scores: ", scores);
console.log("Average Scores: ", averageScores);


//Task 3: Employee Records
//Declare an object employee with properties: name, age, department, and isActive.
let employee = {
    name: "Zachary Keenan",
    age: 21,
    department: "Finance",
    isActive: true,
};
//Update the department property.
employee.department = "Marketing";
//Add a new property position to the object.
employee.position = "Intern";
//Log the updated object to the console.
console.log("Updated Employee Record: ", employee);


//Task 4: Customer Database
//Decalre an array customers with at least three objects, each with name, email, and purchaseAmountproperties.
let customers = [
    {name: "Brianna Smith", email: "Briannasmith@gmail.com", purchaseAmount: 175},
    {name: "Lauren Hala", email: "Laurenhala@icloud.com", purchaseAmount: 119},
    {name: "Liam Rayne", email: "Liamrayne02@gmail.com", purchaseAmount: 156}
]
//Add a new customer to the array.
customers.push({name: "Renee Sikk", email: "Reneesikk@gmail.com", purchaseAmount: 254});
//Log the entire customer list to the console.
console.log("Customer List: ", customers);


