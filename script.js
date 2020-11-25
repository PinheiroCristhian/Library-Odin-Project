let id = 0;
const myLibrary = [];

class Books {

    constructor(bookTitle = 'Unknown', bookAuthor = 'Unknown', bookPages = 0, read) {
       
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookPages = bookPages;
        this.read = read;
        this.delete = 'X';
        this.id = id;

    }

}

function start() {
    showForm();
    addBook();
}

function htmlElements() {
    const form = document.querySelector('form');
    const addBookToLibraryBtn = document.querySelector('#addBookToLibraryBtn');
    const addBookBtn = document.querySelector('#addBook');
    const backBtn = document.querySelector('#getBack');
    const bookName = document.querySelector('#bookTitle').value;
    const bookAuthor = document.querySelector('#bookAuthor').value;
    const bookPages = document.querySelector('#bookPage').value;
    const readBook = document.querySelectorAll('input[type=radio]');
    const deleteBtn = document.querySelectorAll('.delete');
    const readBtn = document.querySelectorAll('.read');
    

    return { 
        form,
        addBookToLibraryBtn,
        addBookBtn,
        backBtn,
        bookName,
        bookAuthor,
        bookPages,
        readBook,
        deleteBtn,
        readBtn
    }
}

function showForm() {
        
    htmlElements().addBookToLibraryBtn.addEventListener('click', () => {
        htmlElements().form.style.display = 'block';
        htmlElements().addBookToLibraryBtn.style.display = 'none';
    });

    htmlElements().backBtn.addEventListener('click', () => {

        htmlElements().form.style.display = 'none';
        htmlElements().addBookToLibraryBtn.style.display = 'block';

    });
    
}

function addBook() {
    
    htmlElements().addBookBtn.addEventListener('click', () => {
        if (htmlElements().bookName && htmlElements().bookAuthor && htmlElements().bookPages) {

            htmlElements().readBook.forEach(radioBtns => {

                if (radioBtns.checked) {
                    
                    const newBook = new Books(htmlElements().bookName, htmlElements().bookAuthor, htmlElements().bookPages, radioBtns.value);
                    newBook.id = id;
                    myLibrary.push(newBook);
                }

            });
        
        }
        htmlElements().form.style.display = 'none';
        htmlElements().addBookToLibraryBtn.style.display = 'block';
        displayBooks();
        deleteBook();
        changeReadStatus();


    });

    
}

function deleteBook() {

    htmlElements().deleteBtn.forEach(btn => {

        btn.addEventListener('click', () => {
        
            myLibrary.forEach(book => {

                if (Number(btn.dataset.id) === Number(book.id)) { //if found a book with the same id as span
                    myLibrary.splice(myLibrary.indexOf(book), 1);  //it's going to remove it from array
                    displayBooks(); //then display the leftover books on the page again
                    return deleteBook();
                }

            });
        
        });

    });
    
    
}

function changeReadStatus() {

    htmlElements().readBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            return btn.textContent === 'yes' ? btn.textContent = 'no' : btn.textContent = 'yes';
        });

    });




}

function displayBooks() {

    const tbody = document.querySelector('tbody');
    
    function removeTrs() { //Not duplicate old books when new ones are added
        const trs = document.querySelectorAll('tbody tr');
        trs.forEach(tr => {
            tr.remove();
        });
    }
    removeTrs();

    myLibrary.forEach(book => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        tr.setAttribute('data-id', id);
        for (let key in book) {

            const td = document.createElement('td');

            if (key !== 'id') { //it should not display the ID on the table.

                tr.appendChild(td);

                if (book[key] === 'yes' || book[key] === 'no') {
                    td.innerHTML = `<span class="read" data-id="${id}">${book[key]}</span>`
                }
                else if (key === 'delete') {

                    td.innerHTML = `<span class="delete" data-id="${id}">X</span>`;
                    book.id = id;
                    id++;

                } else {
                    td.textContent = book[key];
                }
                
            }
    
        }
        
    });

}

start();