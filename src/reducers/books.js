import { CREATE_BOOK } from '../actions';

const books = (books = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...books, action.payload];
    default:
      return books;
  }
};

export default books;
