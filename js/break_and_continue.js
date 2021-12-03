"use strict";

function oddNumbers(){
    // let num =  prompt("Enter an odd number")
    let num;
    do{
        num = prompt("Enter an odd number")
    }while (num % 2 === 0);
    console.log("Number to skip: " + num);
    for(let i = 1; i < 51; i++){
        if(i % 2 === 0){
            continue
        }
        if(i - num === 0){
            console.log("Yikes! Skipping number: " + num);
        }else
            console.log("Here is an odd number: " + i)
    }
}

oddNumbers();
///////////////////////
let input = prompt("enter an odd number");
for( let m = input; m % 2 === 0;){
    if(m % 2 !== 0){
        break;
    }
}
