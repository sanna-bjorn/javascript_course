const bookForm = document.querySelector("#book-form");
const title = document.querySelector("#book-form-name");
const author = document.querySelector("#book-form-author");
const pages = document.querySelector("#book-form-pages");
const read = document.querySelector("#book-form-read");
const bookSection = document.querySelector(".main");
const openFormButton = document.querySelector(".header-btn");
const closeFormButton = document.querySelector(".book-form-close");
const formModal = document.querySelector(".form-modal");

//form modal event listeners
openFormButton.addEventListener("click", () => {
  formModal.classList.add("active");
});

closeFormButton.addEventListener("click", () => {
  formModal.classList.remove("active");
});

let myLibrary = [
  {
    title: "This is a book title",
    author: "Taavi the Cat",
    pages: 616,
    read: true,
  },
  {
    title: "Slash the adventure snake",
    author: "Taavi the Cat",
    pages: 909,
    read: true,
  },
  {
    title: "Iggy and the coconut",
    author: "Slash Snake",
    pages: 310,
    read: true,
  },
];
let newBook;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// add prototype to book to update read value in the array of myLibrary

Book.prototype.updateBook = function (index, value) {
  myLibrary[index].read = value;
};

// add books to MyLibrary with event listener for submit action on form. Check if classlist is active and remove it during function invocation. Create a new book based on the values received. Prevent default behaviour since we are not sending data to a server. Clear inputs and print current list of books.

bookForm.addEventListener("submit", (e) => {
  formModal.classList.remove("active");
  e.preventDefault();
  const book = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(book);
  clearInputs();
  printBooks();
});

// remove books from library

// update the book's read status

// print all the books in the library

function printBooks() {}

// Clear the form inputs
function clearInputs() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

printBooks();
