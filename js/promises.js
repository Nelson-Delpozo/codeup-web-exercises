"use strict";

function getGithubCommits(username) {
    console.log(username);
    return fetch(`https://api.github.com/users/${username}/events`)
        .then(response => response.json())
}

getGithubCommits("Nelson-Delpozo").then(events => {
        let dateAndTime = events[0].created_at;
        console.log("Your last push was at: " + (new Date(dateAndTime)).toLocaleString())
}).catch(()=> console.log("You hit the max on this API for now"));


function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}
wait(1000).then(() => console.log(`You'll see this after 1 second`));
wait(3000).then(() => console.log(`You'll see this after 3 seconds`));

const reviewObj = {
    restaurant_id: 1,
    name: 'Codey\'s2',
    rating: 5,
    comments: "This is a really good place for coding and eating things"
};
const url = 'https://codeup-restful-example.glitch.me/reviews';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewObj),
};
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */

$.ajax('https://api.github.com/zen')
.done(function(result){
    console.log(result)
});

fetch('https://api.github.com/zen')
    .then(function(res){
        console.log(res);
    });

$.ajax('https://www.boredapi.com/activity')
    .done(function(result){
        console.log(result)
    });

fetch('https://www.boredapi.com/activity')
    .then(function(res){
        console.log(res);
    });


// WITH AJAX
$.ajax('https://api.kanye.rest')
    .done(function(result){
        console.log(result)
    });

// WITH FETCH
fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(response =>{
        console.log(response)
    });


// MORNING WARMUP

function howManyVowels(string){
    let vowels = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i].toLowerCase() === "a" || string[i].toLowerCase() === "e" || string[i].toLowerCase() === "i" || string[i].toLowerCase() === "o" || string[i].toLowerCase() === "u") {
            vowels += 1
        }
    }
    console.log(vowels);
}
howManyVowels("the quick brown fox jumped over the lazy dog");

// LAURA WARMUP

// write a function that counts the number of duplicate characters.
//     example input: "adsjfdsfsfjsdjfhacabcsbajda"
// expected output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

function numberOfDupes(str){
    let counts = {}

    for(let i =0; i < str.length; i++){
        if (counts[str[i]]){
            counts[str[i]] += 1
        } else {
            counts[str[i]] = 1
        }
    }
    for (let prop in counts){
        if (counts[prop] >= 2){
            console.log(prop + " counted: " + counts[prop] + " times.")
        }
    }
    console.log(counts)
}
numberOfDupes("adsjfdsfsfjsdjfhacabcsbajda");

function howManyConsonants(string){
    let consonants = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i].toLowerCase() !== "a" || string[i].toLowerCase() !== "e" || string[i].toLowerCase() !== "i" || string[i].toLowerCase() !== "o" || string[i].toLowerCase() !== "u" || string[i].toLowerCase() !== " ") {
            consonants += 1
        }
    }
    console.log(consonants);
}
howManyConsonants("the quick brown fox jumped over the lazy dog");



