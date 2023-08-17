//write a javascript program that checks if the eneter password matches the confirmed password . if the password match, the program should log "password match". password validation successful . to the console otherwise , it should log "Password didn't match .password validation unsuccessful" to the console.
// Get user input for password and confirmed password
let password = "Abhishek";
let confirmedPassword = "Abhishek";

// Check if passwords match
if (password == confirmedPassword) {
    console.log("Password Matched. Password validation Successful.");
} else {
    console.log("Password didn't match. Password validation unsuccessful.");
}

//Calculator
function calculator(num1, num2, operator) {
    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log("Result:", result);
}

// Test cases
calculator(5, 3, "+"); // Output: Result: 8
calculator(10, 2, "*"); // Output: Result: 20
calculator(15, 3, "/"); // Output: Result: 5
calculator(8, 4, "-"); // Output: Result: 4
calculator(7, 2, "%"); // Output: Invalid operator

//MixColor
function mixColors(color1, color2) {
    var resultColor;

    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    resultColor = "purple";
                    break;
                case "yellow":
                    resultColor = "orange";
                    break;
                default:
                    resultColor = "Invalid color combination";
                    break;
            }
            break;
        case "blue":
            switch (color2) {
                case "red":
                    resultColor = "purple";
                    break;
                case "yellow":
                    resultColor = "green";
                    break;
                default:
                    resultColor = "Invalid color combination";
                    break;
            }
            break;
        case "yellow":
            switch (color2) {
                case "red":
                    resultColor = "orange";
                    break;
                case "blue":
                    resultColor = "green";
                    break;
                default:
                    resultColor = "Invalid color combination";
                    break;
            }
            break;
        default:
            resultColor = "Invalid color combination";
            break;
    }

    console.log("Resulting color:", resultColor);
}

// Test cases
mixColors("red", "blue"); // Output: Resulting color: purple
mixColors("blue", "yellow"); // Output: Resulting color: green
mixColors("yellow", "red"); // Output: Resulting color: orange
mixColors("green", "blue"); // Output: Resulting color: Invalid color combination

//highest Mark
function findHighestMarks(marks) {
    var highestMarks = -1; // Initialize with a value lower than possible marks

    for (var i = 0; i < marks.length; i++) {
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    return highestMarks;
}

var marks = [85, 92, 78, 95, 88];
var highest = findHighestMarks(marks);

console.log("The highest marks scored by any student: " + highest);
//Capetalize
function capitalizeFirstLetter(name) {
    var firstLetter = name.charAt(0);

    var modifiedName = firstLetter.toLowerCase() === firstLetter
        ? firstLetter.toUpperCase() + name.slice(1)
        : name;

    return modifiedName;
}

var userName = prompt("Enter your name:");
var capitalizedUserName = capitalizeFirstLetter(userName);

console.log("Modified name:", capitalizedUserName);

//Vowel Counter
function countVowels(name) {
    var vowelCount = 0;
    var vowels = "aeiouAEIOU"; // List of vowels (both lowercase and uppercase)

    for (var i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

var userName = prompt("Enter your name:");
var numberOfVowels = countVowels(userName);

console.log("Number of vowels in the name:", numberOfVowels);

//Remove Duplicate
// Sample shopping cart array to hold the items
var shoppingCart = [];

// Function to add an item to the cart, avoiding duplicates
function addItemToCart(item) {
    // Check if the item is already in the cart
    if (shoppingCart.includes(item)) {
        console.log("Item is already in the cart.");
    } else {
        shoppingCart.push(item);
        console.log("Item added to the cart:", item);
    }
}

// Adding items to the cart
addItemToCart("Product A");
addItemToCart("Product B");
addItemToCart("Product A"); // This should log that the item is already in the cart

console.log("Shopping Cart:", shoppingCart);


//Star Pattern


//function printInvertedRightAngledTriangle(i) {
    for (var row = i; row >= 1; row--) {
        var asterisks = '';

        for (var j = 1; j <= row; j++) {
            asterisks += '*';
        }

        console.log(asterisks);
    }


var input = 6;
printInvertedRightAngledTriangle(input);

//Check for divisibility
function printDivisibleBy3NotBy2(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        } else {
            continue;
        }
    }
}

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
printDivisibleBy3NotBy2(numberArray);

//Correct a Bug
function fixCartBug(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2; // Double the quantity of each item
    }
    return cart;
  }
  
  // Example usage:
  const cart = [1, 3, 2, 4]; // Example cart array with quantities
  const fixedCart = fixCartBug(cart);
  console.log(fixedCart); // Output: [2, 6, 4, 8]
 

  //
  
  
  
  






