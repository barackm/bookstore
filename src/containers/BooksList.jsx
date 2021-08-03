import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const [filter, setFilter] = useState('All');
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleRemoveBook = (book) => {
    const { removeBook } = props;
    removeBook(book);
    let books = JSON.parse(localStorage.getItem('books'));
    books = books.filter((b) => b.id !== book.id);
    localStorage.setItem('books', JSON.stringify(books));
  };
  const { books } = props;
  return (
    <div>
      <CategoryFilter filter={filter} onChangeFilter={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} onRemoveBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
});

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
  removeBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
