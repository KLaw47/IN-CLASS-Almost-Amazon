import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  let domString = '';
  let bookString = '';

  domString += `
  <div class="mt-5 d-flex flex-wrap">
  <div class="text-white ms-5 details">
  <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="iconify" data-icon="typcn:star" style="color: goldenrod;" data-width="20" data-height="20"></span> Favorite' : ''}</h5>
  Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
  <div class="mt-5">
  <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
  <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
  <hr>
  <h5>Books</h5>`;

  const array = obj.authorBooks;
  array.forEach((book) => {
    bookString += `
      <div class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        <img src=${book.image} alt=${book.title} style="width: 300px;">
        <h2>${book.title}</h2>
        </div>
      </div>`;
  });
  renderToDOM('#view', domString);
  renderToDOM('#view2', bookString);
};
export default viewAuthor;
