// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threeLanguages = users.filter(function(user){
    return user.languages.length >= 3
});
console.log(threeLanguages);

// Use .map to create an array of strings where each element is a user's email address

let emails = users.map(function(user){
    return user.email;
})
console.log(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let sumOfExperience = users.reduce((total, current) => {
    return (total + current.yearsOfExperience) / users.length;
}, 0)
console.log(sumOfExperience);

// Use .reduce to get the longest email from the list of users.

let longestEmail = emails.reduce(function(longest, current){
    if(current.length > longest.length){
        return current;
    }else return longest;
    }, '');

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let usernames = "Your instructors are: " + users.map(user => user.name).join(', ');
console.log(usernames);

// BONUS

// Use .reduce to get the unique list of languages from the list of users.

let allLangs = users.map(user => user.languages);
console.log(allLangs);
let newArray = [];
allLangs.forEach((array =>{
    newArray = [...newArray, ...array];
}))
console.log(newArray);
let unique = newArray.reduce((unique, lang) => {
  return unique.includes(lang) ? unique: [...unique, lang];
  }, []);
console.log(unique);

// END OF EXERCISES

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

// Create an array of the first letters of each fruit

let firstLetters = fruits.map(function(fruit){
    return fruit[0];
})
console.log(firstLetters);


const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

// Create array of user objects based on the customers array of objects (each user object should just have name and age properties)

let namesAndAges = customers.map(function(customer){
    return {name: customer.name, age: customer.age};
})
console.log(namesAndAges);

// Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects

let civilServants = customers.filter(function(customer){
    return customer.occupation === "Police Officer" || customer.occupation === "Teacher"
})
let civilServantNamesAndAges = civilServants.map(function(civilServant){
    return {name: civilServant.name, age: civilServant.age};
})
console.log(civilServantNamesAndAges);

