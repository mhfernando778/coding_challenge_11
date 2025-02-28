// Task 1 - Creating Book Class //

class Book { // creating a class for books with the guven parameters
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };

    getDetails() { // listing the details of each book
        return `Book Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    };

    updateCopies(quantity) { // updating any changes to the number of copies for each book
        if (this.copies >= quantity) {
            (this.copies += quantity)
        } else {
            `Not Enough Copies Available`
        };
    };
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // creating an instance
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Task 2 - Creating Borrower Class //

class Borrower { // creating a class for borrowers to update the books
    constructor(name, borrowerId, borrowedBooks) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    };

    borrowedBook(book) { // method thats adds a book to borrowedBooks
        this.borrowedBooks.push(book)
    };

    returnBook(book) { // method that removes the book name after its returned
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== book)
    };
}

const borrower1 = new Borrower("Alice Johnson", 201); // creating an instance
borrower1.borrowedBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // logging the instance
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // logging the instance
// Expected output: []


// Task 3 - Creating Library Class //
class Library { // starting a new class for library
    constructor() {
        this.books = []; // an array to be added to
        this.borrowers = []; // an array to be added to
    };

    addBook(book) { // adding a method to adds new books to the library
        this.books.push(book)
    };

    listBooks() { // adding a meethod that logs all books' details
        this.books.forEach(book => console.log(book.getDetails())); 
    };
}

const library = new Library(); // creating new instances
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"