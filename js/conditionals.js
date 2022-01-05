"use strict";



/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value*/

//  function analyzeColor(color){
//
//      if (color === "red"){
//          return "Red is the color of red paint";
//      } else if (color === "blue"){
//          return "Blue is the color of the blue lagoon";
//      } else if (color === "green"){
//          return "Green is the color of the green green grass of home"
//      } else return "Sorry, I don't know anything about that particular color"
//
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color){
    let result = "";
    switch(color){
        case "red":
            result = "Red is the color of red paint";
            break;
        case "blue":
            result = "Blue is the color of the blue lagoon";
            break;
        case "green":
            result = "Green is the color of the green green grass of home";
            break;
        default:
            result = "Sorry, I don't know anything about that particular color";

    }
        return result;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let myAnswer = prompt("Please submit a color").toLowerCase();
alert(analyzeColor(myAnswer));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(discountCode, originalPrice){

    if (discountCode === 0){
        return originalPrice;
    }else if (discountCode === 1){
        return originalPrice * .90;
    }else if (discountCode === 2){
        return originalPrice * .75;
    }else if (discountCode === 3){
        return originalPrice * .65;
    }else if (discountCode === 4){
        return originalPrice * .5;
    }else if (discountCode === 5){
        return 0;
    }


}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
function numberPlay() {
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    let totalBill = parseInt(prompt("What's your total bill?"));
    if (!isNaN(totalBill)) {
        let newPrice = (calculateTotal(luckyNumber, totalBill));
        alert("Your lucky number today was " + luckyNumber + ". " + "Your original price was $" + totalBill + ". " + "Your new price after discount is $" + newPrice + ".");
    } else alert("That's not a valid number");
}
numberPlay();


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.*/

// let confirmation = confirm("Would you like to enter a number?");
//
// if (confirmation){
//     let number = prompt("Please enter a number");
//
//     if (number % 2 === 0){
//         alert("Your number is even!")
//     }else { alert("Your number is odd")}
//
//     alert("Your number plus 100  is: " + (parseInt(number) + 100));
//
//     if (number > 0){
//         alert("Your number is positive!")
//     }else if (number < 0){
//         alert("Your number is negative!")
//     }else { alert("Ha! Your number is zero you cheeky monkey!")
//
//     }
//
// }else alert("Understandable have a nice day")


 /* Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function whatsYourNumber(){
let confirmation = confirm("Would you like to enter a number?");

if (confirmation){
    let number = prompt("Please enter a number");

    if(isNaN(parseInt(number))){
        alert("That's not a number")
        whatsYourNumber();
    } else{

    if (number % 2 === 0){
        alert("Your number is even!")
    }else { alert("Your number is odd")}

    alert("Your number plus 100  is: " + (parseInt(number) + 100));

    if (number > 0){
        alert("Your number is positive!")
    }else if (number < 0){
        alert("Your number is negative!")
    }else { alert("Ha! Your number is zero you cheeky monkey!")

    }
}
}else alert("Understandable have a nice day");

}
whatsYourNumber();


///If it's sunny => wear a t-shirt;
///If it's rainy => wear galoshes;
///If it's snowy => wear a hat;

function whatToWear(){
    let weather = prompt("What's the weather like?").toLowerCase();

    if(weather === "sunny"){
        return "You should wear shorts";
    }else if(weather === "rainy"){
        return "You should wear galoshes";
    }else if(weather === "snowy"){
        return "You should wear a hat"
    }else return "I don't know what kind of weather that is"
}

alert(whatToWear());

/////////////////////////////////////////

function checkAge(){
    let message = "";
    let age = prompt("What's your age?");
    if(age >= 21){
        message = "You are 21 or over!"
    }else message = "Sorry, you're not old enough yet"
    alert(message);
}
checkAge();

//////////////////////////////////

function returnGrades() {
    let students = [{name:"Joe", grade:""}, {name: "Mike", grade:""}, {name: "Laura", grade:""}];
    for(let i = 0; i < students.length; i++){
    let studentGradeNumber = prompt("What's your number grade?");
    let letterGrade = "";
    let message = "";
    if (studentGradeNumber >= 90) {
        letterGrade = "A";
    } else if (studentGradeNumber >= 80) {
        letterGrade = "B";
    } else if (studentGradeNumber >= 70) {
        letterGrade = "C";
    } else if (studentGradeNumber >= 60) {
        letterGrade = "D";
    } else letterGrade = "F";
    students[i].grade = letterGrade;
   message = `Your letter grade is: ${letterGrade}`;
   alert(message);


   }alert("Here are the grades so far:" + (JSON.stringify(students)));
}
returnGrades();





///////////////////////////////////////////////

//ternary operator

function howsTheWeather(){
    let input = parseInt(prompt("What's the temp?"));
    (input >= 90) ? alert("It's pretty hot")
        : (input >= 80) ? alert("It's kind of warm!")
        : (input >= 70) ? alert("It's perfect out")
        : (input < 70) ? alert("Whoa get a jacket")
        : alert("That's all I have to say about that");

}
howsTheWeather();

////////////////////////////////////////////

function skyStatus(){
let sky = prompt("What's the sky look like?").toLowerCase();
switch(sky){
    case "sunny":
        return "Grab a hat";
    case "rainy":
        return "Grab an umbrella";
    case "snowy":
        return "Grab some boots";
    default: return "I don't know anything about that weather";
}}

alert(skyStatus());

//////////////////////////////////////////////

// function for validating number
// return typeof input === "number" || !isNaN(input);

///////////////////////////////////////////////

















