let myLibrary = [];

const shelf = document.getElementById('shelf');
const addBtn = document.querySelector('.add-btn');
const inputForm = document.querySelector('.input-form');

class Book {
  constructor(author, title, numPg) {
    this.author = author;
    this.title = title;
    this.numPg = numPg;
  }

  isInLib() {
    for (let i=0; i < myLibrary.length; i++) {
      const book = myLibrary[i];
      if (book.author === this.author && 
          book.title === this.title && 
          book.numPg === this.numPg) {
        return true;
      }
    }
    return false;
  }

  displayBook() {
    // clean up the existing shelf
    while (shelf.firstChild) {
      shelf.removeChild(shelf.lastChild);
    }

    // add the books inside the array to the shelf div
    myLibrary.forEach(book => {
      const b = document.createElement('div');
      b.classList.add("book");
      b.textContent = `${book.author}, ${book.title}, ${book.numPg}`;
      shelf.appendChild(b);
    });
  }
}

// handle events relating to adding new books on new form
addBtn.addEventListener('click', () => { inputForm.style.setProperty('display', 'block'); });
inputForm.addEventListener('submit', addBook);

function addBook(e) {
  const author = document.getElementById('input-author');
  const title = document.getElementById('input-title'); 
  const numPg = document.getElementById('input-pg'); 

  // add the current book to the library only if it does not exist in the lib
  const book = new Book(author.value, title.value, numPg.value);
  if (!book.isInLib()) {
    myLibrary.push(book);
  }

  // clean up after submitting the form
  author.value = '';
  title.value = '';
  numPg.value = '';
  inputForm.style.setProperty('display', 'none');

  book.displayBook();

  // this is to prevent auto refreshing
  e.preventDefault();
}
