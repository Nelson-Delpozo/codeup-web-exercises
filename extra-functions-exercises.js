function isBoolean(input){
    return typeof input === "boolean";

}

console.log(isBoolean(""));
///////////////////////////

function isString(input){
    return typeof input === "string";
}

console.log(isString(false));
////////////////////////////

function isNotString(input){
    return typeof input !== "string";
}

console.log(isNotString("false"));
////////////////////////////


function isNotANumber(input){
    return isNaN(input);
}

console.log(isNotANumber("3"));
////////////////////////////////


function isEmptyString(input){
    return input === "";
}

console.log(isEmptyString(""));

///////////////////////////////////

function isNegative(number){
    return number < 0;
}

console.log(isNegative(-1));

//////////////////////////////////

function isPositive(number){
    return number > 0;
}

///////////////////////////////////

function isZero(number){
    return number === 0;
}

console.log(isZero());

//////////////////////////////

function isArray(input){
    return Array.isArray(input);
}


console.log(isArray("hi"));
console.log(isArray([1, 2]));











