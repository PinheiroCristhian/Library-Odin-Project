let addNewBook, bookTitle, bookAuthor, bookPages, bookRead, newBook;
addNewBook = document.querySelector('button[type="submit"]');

let myLibrary = [];


function Books(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary() {


    
}

addNewBook.addEventListener('mouseover', function() {
    
    bookTitle = document.querySelector('#book-title').value;
    bookAuthor = document.querySelector('#book-author').value;
    bookPages = document.querySelector('#book-pages').value;
    bookRead = document.querySelectorAll('.book-read');
    if (bookTitle && bookAuthor && bookPages) {
        newBook = new Books(bookTitle, bookAuthor, bookPages, true);
        myLibrary.push(newBook);
    } else {
        console.log('11111')
    }
    

});










