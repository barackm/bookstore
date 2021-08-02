import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const books = (books = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...books, action.payload];
    case REMOVE_BOOK: {
      const newBooks = books.filter((book) => book.id !== action.payload.id);
      return newBooks;
    }
    default:
      return books;
  }
};

export default books;
