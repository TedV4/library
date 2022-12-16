//Sample books
let oil = {
  title: "Oil!",
  author: "Upton Sinclair",
  pages: 548,
  read: false,
};

let prey = {
  title: "Prey",
  author: "Michael Crichton",
  pages: 363,
  read: false,
};

let container = document.querySelector(".grid-container");

let library = [oil, prey];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

//Open and close Add-book form
function openForm() {
  document.getElementById("form").style.display = "block";
  document.querySelector(".main-content").style.opacity = "0.1";
}

function closeForm() {
  document.getElementById("form").style.display = "none";
  document.querySelector(".main-content").style.opacity = 1;
}

let openFormButton = document.querySelector(".open-book-form");
openFormButton.addEventListener("click", function () {
  openForm();
});

let closeFormButton = document.querySelector(".cancel-btn");
closeFormButton.addEventListener("click", function () {
  document.querySelector(".form-container").reset();
  closeForm();
});

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("reading-status").value;

  if (title !== "" && author !== "" && pages !== "") {
    let book = new Book(title, author, pages, read);
    library.push(book);
    let newBook = document.createElement("div");
    newBook.textContent = `${book.title} by ${book.author}, ${book.pages}pgs.`;
    container.appendChild(newBook);
    closeForm();
  }
  document.querySelector(".form-container").reset();
}

let submitButton = document.querySelector(".submit-btn");

submitButton.addEventListener("click", function () {
  addBookToLibrary();
});

function displayLibrary() {
  for (let i = 0; i < library.length; i++) {
    let newBook = document.createElement("div");
    newBook.textContent = `${library[i].title} by ${library[i].author}, ${library[i].pages}pgs.`;
    container.appendChild(newBook);
  }
}

displayLibrary();
