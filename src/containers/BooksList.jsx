import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const [filter, setFilter] = useState('All');
  const handleFilterChange = (e) => {
    const { changeFilter } = props;
    const { value } = e.target;
    setFilter(value);
    if (value === 'All') {
      changeFilter('');
    } else {
      changeFilter(value);
    }
  };
  const handleRemoveBook = (book) => {
    const { removeBook } = props;
    removeBook(book);
    let books = JSON.parse(localStorage.getItem('books'));
    books = books.filter((b) => b.id !== book.id);
    localStorage.setItem('books', JSON.stringify(books));
  };

  const renderFilteredBooks = () => {
    const { books, filter } = props;
    return books.filter((book) => (filter ? book.category === filter : book));
  };

  const books = renderFilteredBooks();
  return (
    <div>
      <CategoryFilter filter={filter} onChangeFilter={handleFilterChange} />
      { books.length === 0 ? <h1>Sorry the books list is empty.</h1> : (
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
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
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
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
