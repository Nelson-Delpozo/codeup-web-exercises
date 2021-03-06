console.log("connected");

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: "Nelson",
        lastName: "Delpozo",
        birthday: {month: "February", day: 26, year: 1970},
        sayHello:function(){
            return "Hello, " + this.firstName + " " + this.lastName;},
        getBirthday:function(){
            return "Your birthday is " + this.birthday.month + " " + this.birthday.day + ", " + this.birthday.year
        }
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // person.sayHello = function(){
    //     return "Hello, " + this.firstName + " " + this.lastName;
    // }
    console.log(person.sayHello());
    console.log(person.getBirthday());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        if (shopper.amount >= 200){
            console.log(shopper.name + ", you've earned a discount! You spent $" + shopper.amount + ", and you earned a discount of " + (shopper.amount * .12).toFixed(2) + ". Bringing your new total to: $" + (shopper.amount * .88).toFixed(2));
        }else console.log("Sorry, " + shopper.name + ", if you want a discount, you have to spend: $" + (200 - shopper.amount) + " more. Thank you.")

    })




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {title: "For Whom the Bell Tolls",
        author: {firstName: "Ernest",
        lastName: "Hemingway"}},
        {title: "On the Road",
        author: {firstName: "Jack",
        lastName: "Kerouac"}},
        {title: "Roots",
        author: {firstName: "Alex",
        lastName: "Haley"}},
        {title: "Valley of the Dolls",
        author: {firstName: "Jacqueline",
        lastName: "Susann"}},
        {title: "Siddhartha",
        author: {firstName: "Herman",
        lastName: "Hesse"}}
    ]
    console.log(books);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book){
        console.log("Book # " + (books.indexOf(book) + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);

    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook() {
        let title = prompt("Enter a title");
        let firstName = prompt("Enter the author's first name");
        let lastName = prompt("Enter author's last name")
        let newBook = {title:"", author:{firstName:"", lastName:""}};
        newBook.title = title;
        newBook.author.firstName = firstName;
        newBook.author.lastName = lastName;
        console.log(newBook);
        books += books.push(newBook);

    }
    console.log(books);
    createBook();

    ////////////////////////////////////////////////////

    // function showBookInfo(array){
    //     array.forEach(function(book){
    //         console.log("Book # " + (array.indexOf(book) + 1));
    //         console.log("Title: " + book.title);
    //         console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //
    //     })
    // }
    //
    // showBookInfo(books);









})();
