import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onRemoveBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="button" onClick={() => onRemoveBook(book)}>
        Delete
      </button>
    </td>
  </tr>
);

Book.defaultProps = {
  book: { id: 1, title: 'First world war', category: 'History' },
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  onRemoveBook: PropTypes.func.isRequired,
};

export default Book;
