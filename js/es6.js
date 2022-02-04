/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`

const name = 'nelson';
const email = 'nelson@gmail.com';
const languages = ['html', 'css', 'javascript'];
// email = 'name@email.com';
// can't do it

// TODO: rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});

const person = {
  name, email, languages
};
users.push(person);
console.log(users);



// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions

users.forEach(user => emails.push(user.email));
users.forEach(user => names.push(user.name));

// TODO: replace `var` with `let` in the following declaration
let developers = [];

users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition

  const {name, email, languages} = user;
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  // TODO: rewrite the assignment below to use template strings
//   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });
developers.push(`${name}'s email is ${email} and ${name} knows ${languages.join(', ')}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for (const developer of developers) {

  // TODO: rewrite the assignment below to use template strings
  list += `<li>${developer}</li>`;
}
list += '</ul>';
console.log(list);

// developers.forEach(function (developer) {
//   list += '<li>' + developer + '</li>';
// });
// list += '</ul>';

Promise.resolve('one').then((one) => {
  console.log(one);
  return 'two';
}).then((two) => {
  console.log(two);
  return 'three';
}).then((three) => {
  console.log(three);
});

fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error));

const myPromise = fetch('https://api.github.com/users');
myPromise.then(response => console.log(response));
myPromise.catch(error => console.error(error));

fetch('https://api.github.com/users').then( response => {
  response.json().then( users => {
    users.forEach( user => {
      // do something with each user object...
      console.log(user);
    });
  });
});

fetch('https://api.github.com/users').then( response => {
  response.json().then( users => {
    users.forEach( userObj  => {
      // do something with the username login
      console.log(userObj.login);
    });
  });
});

fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(users => {
      users.forEach( userObj => {
        // do something with each username
        console.log(userObj.login);
      })
    })
    .catch(error => console.error(error));
function getGithubUsernames() {
  return fetch('https://api.github.com/users')
      .then(response => response.json())
}

// later on...

getGithubUsernames().then( users => {
  users.forEach( userObj => {
    // do something with each username
    console.log(userObj.login);
  });
}).catch(error => console.error(error));

// const myPromise2 = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// console.log(myPromise2);
// myPromise2.then(() => console.log('resolved!'));
// myPromise2.catch(() => console.log('rejected!'));

// const myPromise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 1500);
// });

// console.log(myPromise3); // a pending promise
//
// myPromise3.then(() => console.log('resolved!'));
// myPromise3.catch(() => console.log('rejected!'));

function makeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve('Here is your data: ...');
      } else {
        reject('Network Connection Error!');
      }
    }, 1500);
  });
}

const request = makeRequest();
console.log(request); // pending promise
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"

