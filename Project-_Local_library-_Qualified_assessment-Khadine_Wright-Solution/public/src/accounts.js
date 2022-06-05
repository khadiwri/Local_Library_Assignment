//return an object holding the account id and name if it matches the received id
function findAccountById(accounts, id) {
  let found = accounts.find((locateAccount) => locateAccount.id === id);
  return found;
}

//take in given array, sort objects.value(accounts) of key "last" in alphabetical order
function sortAccountsByLastName(accounts) {
  let order = accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1));
 return order;
}

//return total amount of times a user's id appears in borrowed array, 
function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    const collectBorrows = books[i].borrows;
    for (let j = 0; j < collectBorrows.length; j++) {
      if (books[i].borrows[j].id === account.id) {
        total++;
      }
    }
  }
  return total;
}

//helper function to locate author by ID in function below
function _findAuthorById(authors, id) {
  let authorObj = authors.find((locateAuthor) => locateAuthor.id === id);
  return authorObj;
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountBookList =[];
  let returnedBooks = [];
  let borrowedByAccount = [];
  
  for(let i = 0; i < books.length; i++) {
    let book = books[i];
    book.author = _findAuthorById(authors, book.authorId);
    
    for(let j = 0; j < book.borrows.length; j++) {
      if(!book.borrows[j].returned && book.borrows[j].id === account.id) {
        borrowedByAccount.push(book.borrows[j]);
        accountBookList.push(book);
      } else {
        returnedBooks.push(book.borrows[j]);
      }
    }
  }
  return accountBookList;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
