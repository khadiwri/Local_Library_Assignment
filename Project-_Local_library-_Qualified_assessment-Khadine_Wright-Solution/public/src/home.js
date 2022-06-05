function getTotalBooksCount(books) {
  let sum = 0;
  for (let i = 0; i < books.length; i++) {
    sum++;
  }
  return sum;
}

function getTotalAccountsCount(accounts) {
  let sumOfAccounts = 0;
  for (let i = 0; i < accounts.length; i++) {
    sumOfAccounts++;
  }
  return sumOfAccounts;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (const count of books) {
    if (count.borrows[0].returned === false) {
      total++
    }
  }
  return total;
}

function getMostCommonGenres(books) {
  let genreList = books.reduce((total, book) => {
  let genreCount = total.find(key => book.genre === key.name);
  if (genreCount) {
    genreCount.count++; 
  } else {
    total.push({ name: book.genre, count: 1 }); 
  }
  const sortList = total.sort((bookA, bookB) =>  
    bookA.count < bookB.count ? 1 : -1 
    ) 
   return sortList;
}, []);
  return genreList.slice(0, 5);
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  for(let i = 0; i < books.length; i++) {
    let book = books[i];
    let countOfAccounts = 0;
    if(book.borrows) {
      countOfAccounts = book.borrows.length;
      popularBooks.push({ name: book.title, count: countOfAccounts});
    }
  }
  const sortList = popularBooks.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1);
  return sortList.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let authorOb = books.reduce((acc, {authorId, borrows}) => {
    if(acc[authorId]){
      acc[authorId] += borrows.length;
    } else {
      acc[authorId] = borrows.length;
    }
    return acc;
  }, {});

  let organizedList = Object.keys(authorOb);
     organizedList.sort((key1, key2) => {
       if (authorOb[key1] > authorOb[key2]) {
         return -1;
       } else {
         return 1;
     }
   }); 
    //console.log(organizedList);
  
  return organizedList.map(authorId => {
    let author = authors.find(authorFun => authorFun.id == authorId);
     let name = `${author.name.first} ${author.name.last}`;
      let ranVar = {name, count : authorOb[authorId]};
    return ranVar;
  }).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
