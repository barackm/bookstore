import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.defaultProps = {
  book: { id: 1, title: 'First world war', category: 'History' },
};

Book.propTypes = {
  book: { id: PropTypes.string, title: PropTypes.string, category: PropTypes.string },
};

export default Book;
