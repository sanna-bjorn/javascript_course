const bookForm = document.querySelector("#book-form");
const title = document.querySelector("#book-form-name");
const author = document.querySelector("#book-form-author");
const pages = document.querySelector("#book-form-pages");
const read = document.querySelector("#book-form-read");
const bookSection = document.querySelector(".main");
const openFormBtn = document.querySelector(".header-btn");
const closeFormBtn = document.querySelector(".book-form-close");
const formModal = document.querySelector(".form-modal");

// Open form modal
openFormBtn.addEventListener("click", () => {
  formModal.classList.add("active");
});

// Close form modal
closeFormBtn.addEventListener("click", (e) => {
  formModal.classList.remove("active");
});

// Array of books
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

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// add prototype to book to update read value in the array of myLibrary. Library prototype instead of Book to target all books

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

// Remove books from Library
function removeBook() {
  const removeBtns = document.querySelectorAll(".card-btn");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      myLibrary.splice(btn.getAttribute("data"), 1);
      printBooks();
    });
  });
}

// Function to update the books read status
function UpdateRead() {
  const bookCheckbox = document.querySelectorAll(".card-checkbox");
  bookCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("click", (update) => {
      const bookIndex = checkbox.getAttribute("data");
      const readValue = checkbox.checked;
      update = Object.create(Book.prototype);
      update.updateBook(bookIndex, readValue);
      saveTodos();
    });
  });
}

// Print all the books in the Library to the page
function printBooks() {
  bookSection.textContent = "";
  myLibrary.forEach((book, index) => {
    createBookCard(book, index);
  });
  removeBook();
  UpdateRead();
  saveTodos();
}

// Clear form inputs
function clearInputs() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

// Create the Book elements for the page
function createBookCard(book, index) {
  // Creates the card div
  const newCardDiv = document.createElement("div");
  newCardDiv.classList.add("card");

  //Add a title to the div
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = book.title;
  newCardDiv.append(cardTitle);

  // Add the author name to the div
  const cardAuthor = document.createElement("p");
  cardAuthor.classList.add("card-author");
  cardAuthor.innerText = book.author;
  newCardDiv.append(cardAuthor);

  // Add the pages to the div
  const cardPages = document.createElement("p");
  cardPages.classList.add("card-pages");
  cardPages.innerText = book.pages;
  // Add icon to the pages div
  const cardPagesIcon = document.createElement("img");
  cardPagesIcon.setAttribute("src", "resources/pages-read.png");
  cardPagesIcon.classList.add("card-pages-svg");
  cardPages.append(cardPagesIcon);
  newCardDiv.append(cardPages);

  // Add the read checkbox to the div
  const cardCheckbox = document.createElement("input");
  cardCheckbox.setAttribute("data", index);
  cardCheckbox.setAttribute("type", "checkbox");
  cardCheckbox.setAttribute("id", `checkbox${index}`);
  cardCheckbox.setAttribute("name", `checkbox${index}`);
  cardCheckbox.classList.add("card-checkbox");
  cardCheckbox.checked = book.read;
  newCardDiv.append(cardCheckbox);

  // Add the read checkbox label
  const cardCheckboxLabel = document.createElement("label");
  cardCheckboxLabel.setAttribute("for", `checkbox${index}`);
  cardCheckboxLabel.classList.add("card-checkbox-label");
  // Add the icon to the checkbox label div
  const cardCheckboxLabelIcon = document.createElement("img");
  cardCheckboxLabelIcon.setAttribute("src", "resources/check-circle.png");
  cardCheckboxLabelIcon.classList.add("card-checkbox-label-svg");
  cardCheckboxLabel.append(cardCheckboxLabelIcon);
  newCardDiv.append(cardCheckboxLabel);

  // Add a remove button to the div
  const cardBtn = document.createElement("button");
  cardBtn.setAttribute("data", index);
  cardBtn.classList.add("card-btn");
  //Add icon to the remove button
  const cardBtnIcon = document.createElement("img");
  cardBtnIcon.setAttribute("src", "resources/trash-can.png");
  cardBtnIcon.classList.add("card-btn-svg");
  cardBtn.append(cardBtnIcon);
  newCardDiv.append(cardBtn);

  //Add the new book to book section of the page
  bookSection.append(newCardDiv);
}

// Add form validation with JS
const bookName = document.getElementById("book-form-name");

bookName.addEventListener("input", (event) => {
  if (bookName.validity.typeMismatch) {
    bookName.setCustomValidity("I am expecting a book name!");
    bookName.reportValidity();
  } else {
    bookName.setCustomValidity("");
  }
});

const bookPages = document.getElementById("book-form-pages");

bookPages.addEventListener("input", (event) => {
  if (bookPages.validity.rangeUnderflow) {
    bookPages.setCustomValidity("I am expecting at least 10 pages!");
    bookPages.reportValidity();
  } else {
    bookPages.setCustomValidity("");
  }
});

printBooks();
