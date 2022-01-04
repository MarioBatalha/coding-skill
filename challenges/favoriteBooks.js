class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes("The")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`Favorite Books:  ${String(this.favoriteBooks.length)}`);

    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

function addFavoriteBook(bookNames) {
  if (!bookNames.includes("The")) {
    favoriteBooks.push(bookNames);
  }
}

function loadBooks(theBookShelf) {
    fakeAjax(BOOK_API, function onBooks(bookNames) {
        for(let bookName of bookNames) {
            theBookShelf.addFavoriteBook(bookName)
        }
        theBookShelf.printFavoriteBooks();
    });
}

var BOOK_API = "https://some.url/api";

var myBooks = new Bookshelf();
loadBooks(myBooks);

function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cd([
      "The greatest moment of my career",
      "No pain no gain",
      "Be kind every time",
      "What is your main point",
    ]);
  },500);
}
