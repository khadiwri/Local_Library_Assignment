function findAuthorById(authors, id) {
  let found = authors.find((locateAuthor) => locateAuthor.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((locateBook) => locateBook.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = [];
  let notReturned = [];
  let endArr = [];
  for (let key of books) {
    let status = books.find((status) => key.borrows[0].returned === false);
  if (status) {
    returnedBooks.push(status);
  } else {
    notReturned.push(status);
  }
}
  endArr.push(returnedBooks);
  endArr.push(notReturned);
  return endArr;
}

function getBorrowersForBook(book, accounts) {
  //store new list of accounts that are in the books borrowed array
  let listOfAccounts = [];
  for (let borrow of book.borrows) {
    //find account objects given by the id
    let borrowAccount = accounts.find((account) => borrow.id === account.id);
    borrowAccount.returned = borrow.returned;
    listOfAccounts.push(borrowAccount);
  }
  return listOfAccounts.splice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
