function findAuthorById(authors, id) {
  let foundAuthorId = authors.find((author) => author.id === id);
  return foundAuthorId;
}

function findBookById(books, id) {
  let foundBookId = books.find((book) => book.id === id);
  return foundBookId;
}

function partitionBooksByBorrowedStatus(books) {
  allBooks = [
  checkedOut = [],
  checkedIn = []
  ]
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.borrows === false) {
     checkedOut.push(book);
    } else {
     checkedIn.push(book);
    }
    return allBooks;
  }
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
