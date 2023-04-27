function findAuthorById(authors, id) {
  let foundAuthorId = authors.find((author) => author.id === id);
  return foundAuthorId;
}

function findBookById(books, id) {
  let foundBookId = books.find((book) => book.id === id);
  return foundBookId;
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter(book => book.borrows.every(borrow => borrow.returned === true));
  let booksBorrowed = books.filter(book => book.borrows.some(borrow => borrow.returned === false));

  let finalArray = [[...booksBorrowed], [...booksReturned]];

  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrows) => {
    let account = accounts.find((account) => account.id === borrows.id);
    return {...borrows, ...account};
  })
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
