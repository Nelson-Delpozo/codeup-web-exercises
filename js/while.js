console.log("connected");

//while loops exercises//

let i = 2;
while(i <= 65536) {

    console.log(i);

    i *= 2;
}

///////////////////////////////////

//generates a random number between 50 - 100//
let allCones = Math.floor(Math.random() * 50) + 50;

console.log(`We have to sell ${allCones} cones before we can go home :(`);

do{

        const ConesPerPerson =  Math.floor(Math.random() * 5) + 1;

        if (allCones >= ConesPerPerson) {
            console.log(ConesPerPerson + " cones sold!")
            allCones -= ConesPerPerson
            console.log("Only " + allCones + " left!");
        } else {
            console.log("I can't sell you " + ConesPerPerson + " cones, I only have " + allCones + " left!");
        }
        if(allCones === 0){
            console.log("Yay I sold them all now I can go home to my family!");
        }
} while (allCones > 0);

//////////////////////////////////////////
let z = 2;
while(z <= 50){
    if(z % 2 === 0){
    console.log(`the number is: ${z}.`);
    }z++;
}


/////////////////////////////////////////////
let k  = 1
while(k <= 10){

    console.log(k)
    k++
}

let l = 1;
do{
    console.log(l)
    l++
}while(l <= 10);

//////////////////////////////////////////

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.
function pass(){

const actualPassword = "qwerty123";
let password = prompt("Please enter your password");

    while(password !== actualPassword){
        alert("Wrong password, try again");
        password = prompt("Please re-enter password")
    }alert("Correct!");
}

pass();
////////////////////////////////////////////////////////

























