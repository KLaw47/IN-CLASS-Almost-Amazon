import { createAuthor } from '../../api/authorData';
import { createBook } from '../../api/bookData';
import { showAuthors } from '../components/pages/authors';
import { showBooks } from '../components/pages/books';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // complete TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author_id').value,
      };
      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // complete TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      if (e.target.id.includes('submit-book')) {
        const bookObject = {
          title: document.querySelector('#title').value,
          image: document.querySelector('#image').value,
          price: document.querySelector('#price').value,
          description: document.querySelector('#description').value,
          sale: document.querySelector('#sale').checked,
          author_id: document.querySelector('#author_id').value,
          firebaseKey,
        };
    }

    // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      const newAuthor = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
      };
      createAuthor(newAuthor).then((authorArray) => showAuthors(authorArray));
    }
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('')
  });
};

export default formEvents;
