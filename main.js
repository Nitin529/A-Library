let theLibrary = [];

      function Book(title, author, yearOfPublication, isRead) {
          this.title = title;
          this.author = author;
          this.yearOfPublication = yearOfPublication;
          this.isRead = isRead;
      }

      let bookOne = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", "1997", true);
      theLibrary.push(bookOne);

      let bookTwo = new Book("Harry Potter and the Chamber of Secrets", "J. K. Rowling", "1998", true);
      theLibrary.push(bookTwo);

      let bookThree = new Book("Harry Potter and the Prisoner of Azkaban", "J. K. Rowling", "1999", true);
      theLibrary.push(bookThree);

      let bookFour= new Book("Harry Potter and the Goblet of Fire", "J. K. Rowling", "2000", true);
      theLibrary.push(bookFour);

      let bookFive = new Book("Harry Potter and the Order of the Phoenix", "J. K. Rowling", "2003", true);
      theLibrary.push(bookFive);

      let bookSix = new Book("Harry Potter and the Half-Blood Prince", "J. K. Rowling", "2005", true);
      theLibrary.push(bookSix);

      let bookSeven = new Book("Harry Potter and the Deathly Hallows", "J. K. Rowling", "2007", true);
      theLibrary.push(bookSeven);

      for (let i=0; i<theLibrary.length; i++) {
        let listElement = document.createElement("li");
        listElement.id = "item" + String(i+1);
        document.getElementById("theLibrary").appendChild(listElement)
        let unorderedList = document.createElement("ul");
        unorderedList.id = "book" + String(i+1);
        document.getElementById("item" + String(i+1)).appendChild(unorderedList);
        let bookTitle = document.createElement("li");
        bookTitle.innerHTML = "Title: " + theLibrary[i].title;
        document.getElementById("book" + String(i+1)).appendChild(bookTitle);
        let bookAuthor = document.createElement("li");
        bookAuthor.innerHTML = "Author: " + theLibrary[i].author;
        document.getElementById("book" + String(i+1)).appendChild(bookAuthor);
        let bookYearOfPublication = document.createElement("li");
        bookYearOfPublication.innerHTML = "Year of Publication: " + theLibrary[i].yearOfPublication;
        document.getElementById("book" + String(i+1)).appendChild(bookYearOfPublication);
        let isRead = document.createElement("li");
        isRead.innerHTML = "Read?: " + theLibrary[i].isRead;
        document.getElementById("book" + String(i+1)).appendChild(isRead);
        let changeStatus = document.createElement("button");
        changeStatus.innerHTML = "Change Read Status";
        changeStatus.onclick = function() {
          if (theLibrary[i].isRead == true) {
            theLibrary[i].isRead = false;
          } else {
            theLibrary[i].isRead = true;
          }
          isRead.innerHTML = "Read?: " + theLibrary[i].isRead;
        }
        document.getElementById("book" + String(i+1)).appendChild(changeStatus);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML="Delete Book";
        deleteButton.onclick = function() {
          let libraryList = document.getElementById("theLibrary");
          let bookToBeDeleted = document.getElementById("item" + String(i+1));
          libraryList.removeChild(bookToBeDeleted);
        }
        document.getElementById("book" + String(i+1)).appendChild(deleteButton);
      }

      function showForm() {
        document.getElementById("overlay").style.display = "block";
      }

      function closeForm() {
        document.getElementById("overlay").style.display = "none";
      }

      let j=0;

      function acceptFormData() {
        let newBookTitle = document.getElementById("title").value;
        let newBookAuthor = document.getElementById("author").value;
        let newBookYearOfPublication = document.getElementById("yearOfPublication").value;
        let newBookRead = document.getElementById("read").checked;

        if (!(newBookTitle && newBookAuthor && newBookYearOfPublication)) {
          alert("Please enter all the details");
          return;
        }

        let newBook = new Book(newBookTitle, newBookAuthor, newBookYearOfPublication, newBookRead);

        theLibrary.push(newBook);

        let i=theLibrary.length -1;

        let listElement = document.createElement("li");
        listElement.id = "item" + String(i+1);
        document.getElementById("theLibrary").appendChild(listElement)
        let unorderedList = document.createElement("ul");
        unorderedList.id = "book" + String(i+1);
        document.getElementById("item" + String(i+1)).appendChild(unorderedList);
        let bookTitle = document.createElement("li");
        bookTitle.innerHTML = "Title: " + theLibrary[i].title;
        document.getElementById("book" + String(i+1)).appendChild(bookTitle);
        let bookAuthor = document.createElement("li");
        bookAuthor.innerHTML = "Author: " + theLibrary[i].author;
        document.getElementById("book" + String(i+1)).appendChild(bookAuthor);
        let bookYearOfPublication = document.createElement("li");
        bookYearOfPublication.innerHTML = "Year of Publication: " + theLibrary[i].yearOfPublication;
        document.getElementById("book" + String(i+1)).appendChild(bookYearOfPublication);
        let isRead = document.createElement("li");
        isRead.innerHTML = "Read?: " + theLibrary[i].isRead;
        document.getElementById("book" + String(i+1)).appendChild(isRead);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML="Delete Book";
        deleteButton.onclick = function() {
          console.log(i);
          let libraryList = document.getElementById("theLibrary");
          let bookToBeDeleted = document.getElementById("item" + String(i+1));
          libraryList.removeChild(bookToBeDeleted);
        }
        document.getElementById("book" + String(i+1)).appendChild(deleteButton);
        
        document.getElementById("addNewBookForm").reset();
      }