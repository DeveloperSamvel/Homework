"use strict"

const readers = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
];
   
function getBooksList(books) {
    let text = "";
    let newBooksList = [];
    let sortedNewBooksList = [];

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        
        if(book.readStatus) {
            newBooksList.push(books[i]);
        }
    }

    
    sortedNewBooksList = newBooksList.sort((a, b) => b.percent - a.percent);

    for (let i = 0; i < sortedNewBooksList.length; i++) {
        const element = sortedNewBooksList[i];
        text += element.book;

        if(i !== sortedNewBooksList.length - 1) {
            text += ", "
        }
    }

    return text;
}

const result = getBooksList(readers);
console.log(result);