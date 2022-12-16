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

let warAndPeace = {
  title: "War and Peace",
  author: "Leo Tolstoy",
  pages: 1225,
  read: true,
};

let container = document.querySelector(".grid-container");

let sampleLibrary = [oil, prey, warAndPeace];
let library = [];

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
    displayLibrary();
    closeForm();
  }
  document.querySelector(".form-container").reset();
}

let submitButton = document.querySelector(".submit-btn");

submitButton.addEventListener("click", function () {
  addBookToLibrary();
});

function displayLibrary() {
  let newBook = document.createElement("div");
  let latestAddition = library[library.length - 1];

  let title = document.createElement("p");
  title.textContent = latestAddition.title;

  let author = document.createElement("p");
  author.textContent = latestAddition.author;

  let pages = document.createElement("p");
  pages.textContent = `${latestAddition.pages} pages`;

  let readBtn = document.createElement("button");
  if (latestAddition.read === true) {
    readBtn.textContent = "Read";
  } else {
    readBtn.textContent = "Unread";
  }

  newBook.append(title, author, pages, readBtn);
  container.appendChild(newBook);
}

//display sample library
function displaySampleLibrary() {
  for (let i = 0; i < sampleLibrary.length; i++) {
    let newBook = document.createElement("div");

    let title = document.createElement("p");
    title.textContent = sampleLibrary[i].title;

    let author = document.createElement("p");
    author.textContent = sampleLibrary[i].author;

    let pages = document.createElement("p");
    pages.textContent = `${sampleLibrary[i].pages} pages`;

    let readBtn = document.createElement("button");
    if (sampleLibrary[i].read === true) {
      readBtn.textContent = "Read";
    } else {
      readBtn.textContent = "Unread";
    }

    newBook.append(title, author, pages, readBtn);
    container.appendChild(newBook);
  }
}

displaySampleLibrary();