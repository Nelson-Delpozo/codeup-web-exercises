var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(a, b, c);
///////////////////////
var d = "hello";
var e = false;

d++;
e++;

console.log(d, e);
//////////////////////

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

console.log(perplexed);
///////////////////////////

var price = 2.7;
newPrice = price.toFixed(2);

console.log(newPrice);

//////////////////////

console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);

//////////////////////////////////


console.log(!true);

console.log(!false);

console.log(!!true);

console.log(!!false);

console.log(!!0);

console.log(!!-0);

console.log(!!1);

console.log(!!-1);

console.log(!!0.1);

console.log(!!"hello");

console.log(!!"");

console.log(!!'');

console.log(!!"false");

console.log(!!"0");

/////////////////////

var sample = "Hello Codeup";

//Use .length to find the number of characters in the string.
let length = sample.length;
console.log(length);
//Try to make the sample string all upper or all lower case.
let allUpper = sample.toUpperCase();
let allLower = sample.toLowerCase();
console.log(allUpper);
console.log(allLower);
//Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample = sample + " Students";
console.log(sample);
//Replace "Students" with "Class".
sample = sample.replace("Students", "Class");
console.log(sample);
//Find the index of "c" using .indexOf(). What do you observe?
console.log(sample.indexOf("c"));
//Find the index of "C" using .indexOf().
console.log(sample.indexOf("C"));
//Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
console.log(sample.substring(sample.indexOf("C"), 12 ))

//////////////////////////////////

let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let pricePerDay = 3;
console.log((littleMermaid + brotherBear + hercules) * pricePerDay);

//////////////////////

let googleRate = 400;
let amazonRate = 380;
let facebookRate = 350;
let totalPay = (facebookRate * 10) + (googleRate * 6) + (amazonRate * 4);
console.log(totalPay);
///////////////////////

let classFull = true;
let conflict = false;

if (!classFull && !conflict){
    console.log("You are eligible!")
} else console.log("Sorry, you're not eligible");
///////////////////////
let offerValid = true;
let premiumMember = false;
let numberOfItems = 1;
if ((premiumMember == true || numberOfItems > 2) && offerValid){
    console.log("Continue to checkout")
} else console.log("You need to be a premium member or purchase at least 2 items");
///////////////////////

var username = 'codeup';
var password = 'notastrongpassword';

console.log(password.length >= 5);
console.log(password.includes(username));
console.log(username.length <= 20);
console.log(!username.startsWith(" "));
console.log(!password.startsWith(" "));
console.log(!username.endsWith(" "));
console.log(!password.endsWith(" "));


//////////////////////////////////////////////
