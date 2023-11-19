// Function to take user input for an array
function getUserArray() {
    var userInput = prompt("Enter numbers separated by commas:");
    // Split the input string into an array of numbers
    var userArray = userInput.split(',').map(Number);
    return userArray;
}

// Get user input for the array
var myArray = getUserArray();

// Sorting in descending order without arrow function
myArray.sort(function(a, b) {
    return b - a;
});

// Display the sorted array
console.log("Sorted array in descending order:", myArray);