"use strict";

function getGithubCommits(username) {
    return fetch(`https://api.github.com/users/${username}/events`)
        .then(response => response.json())
}
getGithubCommits("Nelson-Delpozo").then(events => {
    events.forEach(event => {
        // do something with each username
        console.log(event);
    });
}).catch(error => console.error(error));


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

console.log('hello');