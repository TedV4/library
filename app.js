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

function openForm() {
    document.getElementById('form').style.display = "block";
}

function closeForm() {
    document.getElementById('form').style.display = "none";
}

let openFormButton = document.querySelector('.open-book-form');
openFormButton.addEventListener('click', function() {
    openForm();
});

let closeFormButton = document.querySelector('.cancel-btn');
closeFormButton.addEventListener('click', function() {
    closeForm();
})

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