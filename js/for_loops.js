//for loops exercises//

console.log("connected");
///multiplication table, returns 1-10 times the passed argument//
function multiplicationTable(num){
    for(let i = 1; i < 11; i++){
        console.log(num + " x " + i + " = " + (num*i) )
    }
}

multiplicationTable(7);

////////////////////////////////////
//tenRandomNumbers generates ten random numbers using a for loop and logs the numbers and whether they are even or odd//
function tenRandomNumbers(){

    for (let i = 0; i < 10; i++) {
        let num = (Math.floor(Math.random() * (200 - 20 + 1)) + 20);
        if(num % 2 === 0){
            console.log(num + " is even")
        }else console.log(num + " is odd")

    }

}
tenRandomNumbers();


///////////////////////////////////
//recreating this output:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

function makePyramidOfNumbers(){

    for(let i = 1; i < 10; i++){
        let str = "";
        for(let f = i; f > 0; f--){
            str += i;
        }console.log(str);
    }
}
makePyramidOfNumbers();


///////////////////////////////////
//logs 100-5 in increments of 5//

function forLoop100to5(){

    for(let i = 100; i > 0; i--){
        if(i % 5 === 0){
            console.log(i)
        }
    }
}
forLoop100to5();

//////////////////////////////////

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

//////////////////////////////

function parkingSpots(spots){

    let openSpots = 0;
    console.log(`There are ${spots} spots in this lot.`)

    for (let i = spots; i > 0; i--){
        openSpots++
        console.log(`A spot has opened! There are now: ${openSpots} available.`)
    }

}
parkingSpots(20);

/////////////////////////////////////////

function zeroToFiftyByTwos(){
    for(let i = 0; i <= 50; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}
zeroToFiftyByTwos();

//////////////////////////////////////////


























