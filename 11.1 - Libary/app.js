(function () {

     var library = [
          {
               author: "Bill Gates",
               title: "The Road Ahead",
               readingStatus: true
          },
          {
               author: "Steve Jobs",
               title: "Walter Isaacson",
               readingStatus: true
          },
          {
               author: "Suzanne Collins",
               title: "Mockingjay: The Final Book of The Hunger Games",
               readingStatus: false
          }
     ];

     const logBook = book => {
          console.log(`Book author is ${book.author}, title is ${book.title} and the reading status is true!`)
     }


     const displayBook = array => {
          array.filter( book => {
               if(book.readingStatus){
                    logBook(book);
               } 
          })
     }

     displayBook(library);

})();