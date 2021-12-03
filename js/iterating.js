console.log("connected");

(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Donny", "Walter", "Bunny", "Dude"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0], names[1], names[2], names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    function loopTest(array){
        let names = ["Donny", "Walter", "Teddy", "Dude"];
        for (let i = 0; i < array.length; i++){
            console.log("The name at index: " + i + " is: " + array[i] + ".");
        }
    }
    loopTest(names);





    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log("Here is a name: " + name + ".");
    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array){
        return array[0];
    }

    function second(array){
        return array[1];
    }

    function last(array){
        return array[array.length -1];
    }

    console.log(first(names));
    console.log(second(names));
    console.log(last(names));


})();

////////////////////////////////////////////
//create an array of my favorite foods
let pizza = ["cheese", "crust", "arugula"]
let myFaveFoods = ["Beans", "Rice", "Spinach Dip", "Green Bean Casserole", "Chik'n Nuggets", pizza];
console.log(myFaveFoods);

myFaveFoods[1] += " Johnson";
console.log(myFaveFoods);
myFaveFoods[0] += " #1";
myFaveFoods[1] += " #2";
myFaveFoods[2] += " #3";
myFaveFoods[3] += " #4";
myFaveFoods[4] += " #5";

console.log(myFaveFoods);



for(let i = 0; i < myFaveFoods.length; i++){
    myFaveFoods[i] += " ala mode"
}
console.log(myFaveFoods);






