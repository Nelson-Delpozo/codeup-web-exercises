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

