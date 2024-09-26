// Chapter 14-16

// 1. 
var studentNamesLiteral = [];

// 2. 
var studentNamesObject = new Array();

// 3. 
var stringsArray = ["Apple", "Banana", "Mango"];

// 4. 
var numbersArray = [10, 20, 30, 40];

// 5. 
var booleanArray = [true, false, true];

// 6. 
var mixedArray = ["John", 25, true, { course: "JavaScript" }];

// 7. 
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Educational Qualifications:</h2>");
document.write("<ul>");
educationQualifications.forEach(qualification => {
    document.write(`<li>${qualification}</li>`);
});
document.write("</ul>");

// 8. 
var studentNames = ["Alice", "Bob", "Charlie"];
var studentScores = [400, 350, 480];
var totalMarks = 500;

studentNames.forEach((name, index) => {
    var percentage = (studentScores[index] / totalMarks) * 100;
    document.write(`${name} scored ${studentScores[index]} out of ${totalMarks}, Percentage: ${percentage}% <br>`);
});

// 9. 
var colors = ["Red", "Green", "Blue"];
document.write("<h2>Colors:</h2>");
document.write(colors.join(", ") + "<br>");

// a. 
var colorToAddBeginning = prompt("Enter a color to add at the beginning:");
colors.unshift(colorToAddBeginning);
document.write("After adding to beginning: " + colors.join(", ") + "<br>");

// b. 
var colorToAddEnd = prompt("Enter a color to add at the end:");
colors.push(colorToAddEnd);
document.write("After adding to end: " + colors.join(", ") + "<br>");

// c. 
colors.unshift("Purple", "Orange");
document.write("After adding two colors to the beginning: " + colors.join(", ") + "<br>");

// d. 
colors.shift();
document.write("After deleting the first color: " + colors.join(", ") + "<br>");

// e. 
colors.pop();
document.write("After deleting the last color: " + colors.join(", ") + "<br>");

// f. 
var indexToAdd = prompt("At which index do you want to add a color?");
var colorToAddAtIndex = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("After adding color at index: " + colors.join(", ") + "<br>");

// g. 
var indexToDelete = prompt("At which index do you want to delete color(s)?");
var numToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, numToDelete);
document.write("After deleting colors: " + colors.join(", ") + "<br>");

// 10. 
var scores = [320, 230, 480, 120];
scores.sort((a, b) => a - b);
document.write("Sorted Scores: " + scores.join(", ") + "<br>");

// 11. 
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
var selectedCities = cities.slice(1, 4);
document.write("Selected Cities: " + selectedCities.join(", ") + "<br>");

// 12. 
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
document.write("Single String: " + singleString + "<br>");

// 13. 
var fifoArray = [];
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
document.write("FIFO: " + fifoArray.shift() + ", " + fifoArray.shift() + ", " + fifoArray.shift() + "<br>");

// 14. 
var lifoArray = [];
lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");
document.write("LIFO: " + lifoArray.pop() + ", " + lifoArray.pop() + ", " + lifoArray.pop() + "<br>");

// 15. 
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
phoneManufacturers.forEach(brand => {
    document.write(`<option>${brand}</option>`);
});
document.write("</select>");


// Chapter 17-20

// 1. 
var multiArray = [[], [], []];

// 2.
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log(matrix);

// 3. 
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. 
var tableNumber = parseInt(prompt("Enter a number for the multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the table:"));
for (var i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// 5. 
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 6. 
// a. 
var counting = [];
for (var i = 1; i <= 15; i++) {
    counting.push(i);
}
console.log("Counting: " + counting.join(", "));

// b. 
var reverseCounting = [];
for (var i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
console.log("Reverse counting: " + reverseCounting.join(", "));

// c. 
var evenNumbers = [];
for (var i = 0; i <= 20; i += 2) {
    evenNumbers.push(i);
}
console.log("Even: " + evenNumbers.join(", "));

// d.
var oddNumbers = [];
for (var i = 1; i <= 19; i += 2) {
    oddNumbers.push(i);
}
console.log("Odd: " + oddNumbers.join(", "));

// e. 
var series = [];
for (var i = 2; i <= 20; i += 2) {
    series.push(i + "k");
}
console.log("Series: " + series.join(", "));

// 7. 
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter the item you want to search for:");
if (items.includes(searchItem.toLowerCase())) {
    alert(`${searchItem} is available in the list.`);
} else {
    alert(`${searchItem} is not available in the list.`);
}

// 8.
var numbers = [24, 53, 78, 91, 12];
var largestNumber = Math.max(...numbers);
console.log("The largest number is: " + largestNumber);

// 9. 
var smallestNumber = Math.min(...numbers);
console.log("The smallest number is: " + smallestNumber);

// 10. 
var multiplesOfFive = [];
for (var i = 5; i <= 100; i += 5) {
    multiplesOfFive.push(i);
}
console.log("Multiples of 5: " + multiplesOfFive.join(", "));
