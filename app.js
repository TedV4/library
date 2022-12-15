let oil = {
    title: 'Oil!',
    author: 'Upton Sinclair',
    pages: 548,
    read: false
}

let prey = {
    title: 'Prey',
    author: 'Michael Crichton',
    pages: 363,
    read: false
}

let container = document.querySelector('.grid-container');

let library = [oil, prey];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary() {

}

function displayLibrary() {
    for (let i = 0; i < library.length; i++) {
        let newBook = document.createElement('div');
        newBook.textContent = `${library[i].title} by ${library[i].author}, ${library[i].pages}pgs.`;
        container.appendChild(newBook);
    }
}

displayLibrary();