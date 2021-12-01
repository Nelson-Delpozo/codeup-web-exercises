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










