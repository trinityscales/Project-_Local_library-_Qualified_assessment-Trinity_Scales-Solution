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

function sortByPopularity(item1, item2) {
  return item2.count - item1.count
}

function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    const { genre } = book
    if (!acc[genre]) acc[genre] = { name: genre, count: 1 }
    else acc[genre].count ++
    return acc
  }, {})
  return Object.values(genres).sort(sortByPopularity).slice(0, 5)
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

function getMostPopularAuthors(books, authors) {
  let finalAnswer = [];
  let result = {};
  const authorInfo = authors.forEach((author) =>{
    const authorId = author.id;
    const { name: {first, last} } = author;
    const authorName = `${first} ${last}`;
    books.forEach((book) => {
      const borrowed = book.borrows.length;
      if (book.authorId === authorId) {
        if (!finalAnswer.some((authorObj) => authorObj["name"] === authorName)) {
          result = { name: authorName, count: borrowed}
          finalAnswer.push(result)
        }
          else {
            const foundAuthor = finalAnswer.find((authorObj) => authorObj["name"] === authorName)
            foundAuthor.count += borrowed
          }
      }
    })
  })
  const sorted = finalAnswer.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1)
sorted.length = 5
  return sorted
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
