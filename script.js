let myLibrary = [];

const shelf = document.getElementById('shelf');
const addBtn = document.querySelector('.add-btn');
const inputForm = document.querySelector('.input-form');

// handle events relating to adding new books on new form
addBtn.addEventListener('click', () => { inputForm.style.setProperty('display', 'block'); });
inputForm.addEventListener('submit', addBook);

// the constructor
function Book(author, title, numPg) {
  this.author = author;
  this.title = title;
  this.numPg = numPg;
}

// add book into the myLibrary array
function addBook(e) {
  const author = document.getElementById('input-author');
  const title = document.getElementById('input-title'); 
  const numPg = document.getElementById('input-pg'); 

  // add the current book to the library only if it does not exist in the lib
  const book = new Book(author.value, title.value, numPg.value);
  console.log(isInLib(book));
  if (!isInLib(book)) {
    myLibrary.push(book);
  }

  // clear the text box after submitting the form
  author.value = '';
  title.value = '';
  numPg.value = '';

  inputForm.style.setProperty('display', 'none');
  displayBook();

  // this is to prevent auto refreshing
  e.preventDefault();
}

// check if the specified book is already in the library
function isInLib(currBook) {
  for (let i=0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    if (book.author === currBook.author && 
        book.title === currBook.title && 
        book.numPg === currBook.numPg) {
      return true;
    }
  }
  return false;
}

function displayBook() {
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
