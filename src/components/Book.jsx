import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onRemoveBook }) => (
  <div className="book-item-container d-flex flex-center">
    <div className="book__details flex-unit d-flex flex-column">
      <div className="book__details__titles d-flex flex-column">
        <h4>{book.category}</h4>
        <h2>{book.title}</h2>
        <span>Suzanne Collins</span>
      </div>
      <div className="books-actions-btn">
        <ul>
          <a href="#f">Comments</a>
          <a href="#f" onClick={() => onRemoveBook(book)}>Remove</a>
          <a href="#f">Edit</a>
        </ul>
      </div>
    </div>
    <div className="book-progress-details d-flex flex-unit flex-center">
      <div className="progress-info d-flex">
        <div className="graph-gray" />
        <div className="progress-data d-flex flex-center flex-column">
          <h2>64%</h2>
          <span>Completed</span>
        </div>
      </div>
      <div className="chapter-details d-flex flex-center flex-column">
        <h3>CURRENT CHAPTER</h3>
        <span className="chapter-name">Chapter 1</span>
        <a href="#f">UPDATE PROGRESS</a>
      </div>
    </div>
  </div>
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
