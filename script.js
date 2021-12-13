let myLibrary = [];

const shelf = document.querySelector('.shelf');
const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', addBook);

function Book(author, title, numPg) {
  // the constructor
  this.author = author;
  this.title = title;
  this.numPg = numPg;
}

function addBook(author, title, numPg) {
  const book = new Book(author, title, numPg);
  myLibrary.push(book);
}

function displayBook() {
  // add the books inside the array to the shelf div
  myLibrary.forEach(book => {
    const b = document.createElement('div');
    b.textContent = `${book.author}, ${book.title}, ${book.numPg}`;
    shelf.appendChild(b);
  });
}

addBook('brian', 'life sucks', 0);
addBook('brian', 'everything sucks', 0);
displayBook();
