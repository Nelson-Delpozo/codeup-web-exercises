"use strict";

//console.log("connected");


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return ("Hello, " + name + "!")
   // console.log("Hello " + name + "!");
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("Nelson");
console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Nelson";
console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 *
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(number){

    return number === 2;
}
console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tip, total){
    return ((tip / 100) * total)
}
//console.log(calculateTip(.5, 10));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let tipPercent = parseInt(prompt("What tip percentage (1-100)"));
let totalBill = parseInt(prompt("What was your total bill?"));
let tipAmount = calculateTip(tipPercent, totalBill);
let newTotal = tipAmount + totalBill;
alert("Your tip amount is $" + tipAmount + ". Your new total comes to $" + newTotal + ".");



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(percentage, price) {
    return (price - ((percentage/100) * price));
}
let discount = prompt("What's your discount percentage (1-100)?");
let price = prompt("What's the price of the item?")

alert("Your discounted price is $" + applyDiscount(discount, price));



////////////class exercises
// function goodDayToFly(cloudy, traffic){
//     if(!cloudy && traffic < 10){
//         console.log("Today's a good day to take to the sky!")
//     }else console.log("Sorry buddy, you're GROUNDED")
//
//
// }
// goodDayToFly(false, 8);

// function add(a, b){
//     return a + b
// }
//
// function subtract(a, b){
//     return a - b
// }
//
// function multiply(a, b){
//     return a * b
// }
//
// function divide(a, b){
//     return a / b
// }
