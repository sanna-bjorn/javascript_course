let myLibrary = [];
let newBook;

class Book {
  constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.value;

    this.bookInfo = function () {
      console.log(title, author, pages, read);
    };
  }
}
//ask for user input to add a book to library. You should call the object constructor on the input and save it as an array to myLibrary.

function addBookToLibrary() {
  userInput = prompt("What book do you want to add?");
  console.log(userInput);
}

userInput = prompt("What book do you want to add?");

myLibrary = Book(userInput);

// const book1 = new Book("The Hobbit", "JRR Tolkien", "295 pages", "true");

// console.log(book1.bookInfo());
