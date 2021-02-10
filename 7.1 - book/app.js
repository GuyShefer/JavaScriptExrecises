(function () {

     let book1 = {
          author : "J.K. Rowling",
          name : "Harry potter and the philosopher's stone",
          numberOfPages : 309,
          ReleaseYear : 1997,
          movieBasedOnTheBook: true,
     }

     let bookDescription = (book) => {
          console.log(`The book ${book.name} was written by ${book.author} in
          the year ${book.ReleaseYear} and has ${book.numberOfPages} pages.`);
     }

     bookDescription(book1);


})();