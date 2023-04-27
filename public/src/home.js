function getTotalBooksCount(books) {
  let totalBooks = 0;
  for (let i = 0; i < books.length; i++) {
    totalBooks++;
  }
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  for (let i = 0; i < accounts.length; i++) {
    totalAccounts++;
  }
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = 0;
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.borrows.some(borrow => borrow.returned === false)) {
      booksBorrowed++;
    }
  }
  return booksBorrowed;
}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
