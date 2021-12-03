"use strict";
function oddNumbers(){
let num;
do{
    num = prompt("Enter an odd number please:");
    if(num <= 0 || num > 50){
        alert("that's outside of the range friend")
    }else if (isNaN(num)){
        alert("That's not even a number")
    }else if(num % 2 === 0){
        alert("That one's not odd")
    }else {alert("That works here we go...open the console")
        break}



}while(true)

console.log("Number to skip: " + num);
for(let i = 1; i < 51; i++){
    if(i % 2 === 0){
        continue
    }
    if(i - num === 0){
        console.log("Yikes! Skipping number: " + num);
    }else
        console.log("Here is an odd number: " + i)

}}
oddNumbers();

