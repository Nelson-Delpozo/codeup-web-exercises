console.log("connected");

//while loops exercises//

let i = 2;
while(i <= 65536) {

    console.log(i);

    i *= 2;
}

////////////////////////////////

//generates a random number between 50 - 100//
var allCones = Math.floor(Math.random() * 50) + 50;
console.log(`We have to sell ${allCones} before we can go home :(`);
do{


        const ConesPerPerson =  Math.floor(Math.random() * 5) + 1;
        //allCones -= ConesPerPerson;
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









