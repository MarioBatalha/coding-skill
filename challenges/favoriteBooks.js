function addFavoriteBook(bookName) {
    if(!bookName.includes("Great")) {
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBooks() {
    console.log(
        `Favorite Books:  ${favoriteBooks.length}`
    )

    for(let bookName of favoriteBooks) {
        console.log(bookName);
    }
}

var favoriteBooks = [];

addFavoriteBook("The greatest moment of my career");
addFavoriteBook("No pain no gain");
addFavoriteBook("Be kind every time");
addFavoriteBook("What is your main point");

printFavoriteBooks();