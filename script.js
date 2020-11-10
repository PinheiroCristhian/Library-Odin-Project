let addNewBook, bookTitle, bookAuthor, bookPages, bookRead, addBookScreen, addBookScreenBtn, backBtn, newBook, tbody, deleteBtn, books, td;
addBookScreen = document.querySelector('form');
addBookScreenBtn = document.querySelector('#add-new-book')
addBookBtn = document.querySelector('#submitBtn');
backBtn = document.querySelector('#backBtn');
tbody = document.querySelector('tbody');

let myLibrary = [];


function Books(title, author, pages, read, exclude) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.exclude = exclude;

}



addBookScreenBtn.addEventListener('click', () => addBookScreen.style.display = 'block');
backBtn.addEventListener('click', () => addBookScreen.style.display = 'none');


function addBookToLibrary(display) {

    addBookBtn.addEventListener('click', function() {
    
        bookTitle = document.querySelector('#book-title').value;
        bookAuthor = document.querySelector('#book-author').value;
        bookPages = document.querySelector('#book-pages').value;
        bookRead = document.querySelectorAll('.book-read');
        if (bookTitle && bookAuthor && bookPages) {
            bookRead.forEach(readBtn => {
                if (readBtn.checked) {
                    newBook = new Books();
                    newBook.title = bookTitle;
                    newBook.author = bookAuthor;
                    newBook.pages = bookPages;
                    newBook.read = readBtn.value;
                    newBook.exclude = 'X';

                    myLibrary.push(newBook);
                    display();
                    deleteBook();
                    changeReadStatus();
                    myLibrary.pop();
                    addBookScreen.style.display = 'none';

                }
            });
            
        }
        

    });
    
}
let id = 1;
function displayBookOnPage() {
    
    myLibrary.forEach(eachBook => {
        
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        tr.setAttribute('data-id', `${'id' + id}`)
        
        for (let key in eachBook) {
            let td = document.createElement('td');
            tr.appendChild(td);
            if (key === 'exclude') {
                let span = document.createElement('span');
                td.appendChild(span);
                span.textContent = `${eachBook[key]}`;
                span.setAttribute('data-id', `${'id' + id}`)
                id++;
                return;
            }
            td.textContent = `${eachBook[key]}`;
        }
        

    });


}

function deleteBook() {

    deleteBtn = document.querySelectorAll('span');
    books = document.querySelectorAll('tr');    
    deleteBtn.forEach(eachBtn => {
        eachBtn.addEventListener('click', () => {
            books.forEach(eachTr => {
                if (eachBtn.dataset.id === eachTr.dataset.id) {
                    eachTr.style.display = 'none';
                }
            });
            

        });
    });
}

function changeReadStatus() {
    td = document.querySelectorAll('td');
    td.forEach(eachTd => {
        eachTd.addEventListener('click', () => {
            if (eachTd.textContent === 'yes') {
                eachTd.textContent = 'no';
            } else if (eachTd.textContent === 'no'){
                eachTd.textContent = 'yes';
            }
        });
    });

}


addBookToLibrary(displayBookOnPage);







