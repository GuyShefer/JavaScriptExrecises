(function () {

     let book1 = {
          author: "J.K. Rowling",
          name: "Harry potter and the philosopher's stone",
          ReleaseYear: 1997,
     }

     let book2 = {
          author: "Robin Sharma",
          name: "Discover Your Destiny",
          ReleaseYear: 1996,
     }

     let bookUtils = {
          getFirstPublished: function (book1, book2) {
               return book1.ReleaseYear < book2.ReleaseYear ? book1 : book2;
          },

          setNewEdition: function (book, edition) {
               book.latestEdition = edition;
          },
          setLanguage: function (book, language) {
               book.language = language;
          },
          setTranslation: function (book, language, translator) {
               book.translation = {
                    language,
                    translator,
               }

          },
          setPublisher: function (book, name, location) {
               book.publisher = {
                    name,
                    location,
               }
          },
          isSamePublisher: function name(book1, book2) {
               return (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location) ? true : false;

          }
     }

     console.log(bookUtils.getFirstPublished(book1, book2)); //3
     console.log(book1);
     bookUtils.setNewEdition(book1, 2002); //4
     console.log(book1);
     bookUtils.setLanguage(book1, 'English'); //5
     console.log(book1);
     bookUtils.setTranslation(book1, 'Hebrew', 'Yossi'); //6
     console.log(book1);
     bookUtils.setPublisher(book1, "Steimatzky", 'Tel-Aviv'); //7
     console.log(book1);
     bookUtils.setPublisher(book2, "Steimatzky", 'Tel-Aviv'); 
     console.log(book2);

     console.log("Is The Publishers are identical : " + bookUtils.isSamePublisher(book1, book2));
})();