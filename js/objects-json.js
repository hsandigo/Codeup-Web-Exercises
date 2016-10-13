/**
 * Created by humbertosandigo on 10/13/16.
 */
'use strict';

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];
var books = [
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": {
            "firstName": "Joanne",
            "lastName": "Rowling"
        }
    },
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": {
            "firstName": "Joanne",
            "lastName": "Rowling"
        }
    },
    {
        "title": "Harry Potter and the Prizoner of Azkaban",
        "author": {
            "firstName": "Joanne",
            "lastName": "Rowling"
        }
    },
    {
        "title": "Harry Potter and the Goblet of Fire",
        "author": {
            "firstName": "Joanne",
            "lastName": "Rowling"
        }
    },
    {
        "title": "Harry Potter and the Order of the Phoenix",
        "author": {
            "firstName": "Joanne",
            "lastName": "Rowling"
        }
    },
    {
        "title": "Harry Potter and the Half-Blood Prince",
        "author": {
            "firstName": "Joanne",
            "lastName": "Rowling"
        }
    },
    {
        "title": "Harry Potter and the Deathly Hallows",
        "author":{
            "firstName": "Joanne",
            "lastName": "Rowling"
        }
    },
    {
        "title": "Harry Potter and the Cursed Child",
        "author":{
            "firstName": "Joanne",
            "lastName": "Rowling"
        }
    }
    ];
    books.forEach(function(book, index){
        console.log("Book # is " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Written by " + book.author.firstName + " "+ book.author.lastName);
        console.log("-----");
    });

    // log out the books array
    //var book = books[0]; this is just to see it simply

    // Loop through the array of books using .forEach and print out the specified information about each one.
    // start loop here//
    // console.log("The title is " + books.title);
    // console.log("It is written by " + books.author.firstName + books.author.lastName);
    // console.log("---");
    // end loop here
