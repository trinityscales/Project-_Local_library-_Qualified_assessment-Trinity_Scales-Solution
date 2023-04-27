function findAccountById(accounts, id) {
  let foundAcctId = accounts.find((account) => account.id === id);
  return foundAcctId;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {

  const accId = account.id;

  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const {id} = account;
  let filteredBooks = books.filter(book => {
    return book.borrows.some(borrow => borrow.id === id && !borrow.returned)
  })

  return filteredBooks.map(book => {
    book.author = authors.find(author => author.id === book.authorId)
    return book
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
