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

function getMostCommonGenres(books) {
  let obj = {};
  books.forEach(book => {
    if (obj[book.genre]) {
      obj[book.genre]++;
    } else {
      obj[book.genre] = 1;
    }
  });

  let genres = [];
  for (let [key, value] of Object.entries(obj)) {
    genres.push({
      'name': key,
      'count': value
    });

    genres.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1);
  }
  return genres.slice(0, 5);
}

function getMostPopularBooks(books) {
  let obj = {};
  books.forEach(book => {
    if (obj[book.title]) {
      obj[book.title] += book.borrows.length;
    } else {
      obj[book.title] = book.borrows.length;
    }
  });

  let titles = [];
  for (let [key, value] of Object.entries(obj)) {
    titles.push({
      'name': key,
      'count': value
    });

    titles.sort((titleA, titleB) => titleA.count > titleB.count ? -1 : 1);
  }
  return titles.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
