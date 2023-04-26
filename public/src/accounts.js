function findAccountById(accounts, id) {
  let foundAcctId = accounts.find((account) => account.id === id);
  return foundAcctId;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let borrows = 0;
  for (const obj of books) {
    if (obj.id === account) borrows++;
  }
  return borrows;
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};