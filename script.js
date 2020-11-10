let addNewBook, bookTitle, bookAuthor, bookPages, bookRead, addBookScreen, addBookScreenBtn, backBtn, newBook, body, table, thead, tbody, options;
addBookScreen = document.querySelector('form');
addBookScreenBtn = document.querySelector('#add-new-book')
addBookBtn = document.querySelector('#submitBtn');
backBtn = document.querySelector('#backBtn');
body = document.querySelector('body');
table = document.createElement('table');
thead = document.createElement('thead');
tbody = document.querySelector('tbody');
options = ['title', 'author', 'pages', 'read'];



let myLibrary = [];


function Books(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}





function createTable(content) {


    for (let i = 0; i <= 3; i++) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = `${content}`;
    }

}


addBookScreenBtn.addEventListener('click', () => addBookScreen.style.display = 'block');
backBtn.addEventListener('click', () => addBookScreen.style.display = 'none');


function addBookToLibrary() {

    addBookBtn.addEventListener('click', function() {
    
        bookTitle = document.querySelector('#book-title').value;
        bookAuthor = document.querySelector('#book-author').value;
        bookPages = document.querySelector('#book-pages').value;
        bookRead = document.querySelectorAll('.book-read');
        if (bookTitle && bookAuthor && bookPages) {
            bookRead.forEach(readBtn => {
                if (readBtn.checked) {
                    console.log('worked');
                    newBook = new Books();
                    newBook.title = bookTitle;
                    newBook.author = bookAuthor;
                    newBook.pages = bookPages;
                    newBook.read = readBtn.value;

                    myLibrary.push(newBook);
                    displayBookOnPage();
                    addBookScreen.style.display = 'none';

                }
            });
            
        } else {
            console.log('11111')
        }
        
    
    });
    
}

function displayBookOnPage() {
  
    myLibrary.forEach(eachBook => {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);

        for (let i = 0; i <= 3; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = `${eachBook[options[i]]}`;
        
        }
        
        
        


    });


}

addBookToLibrary();
/*addNewBook.addEventListener('mouseover', function() {
    
    bookTitle = document.querySelector('#book-title').value;
    bookAuthor = document.querySelector('#book-author').value;
    bookPages = document.querySelector('#book-pages').value;
    bookRead = document.querySelectorAll('.book-read');
    if (bookTitle && bookAuthor && bookPages) {
        bookRead.forEach(readBtn => {
            if (readBtn.checked) {
                console.log('worked');
                newBook.title = bookTitle;
                newBook.author = bookAuthor;
                newBook.pages = bookPages;
                newBook.read = readBtn.value;
                myLibrary.push(newBook);

                console.log(myLibrary);
            }
        });
        
    } else {
        console.log('11111')
    }
    

});*/










