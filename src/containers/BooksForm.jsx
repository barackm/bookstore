import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: '',
        category: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    const { book } = this.state;
    const newbook = { ...book };
    newbook[name] = value;
    this.setState({ book: newbook });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { book } = this.state;
    const { createBook } = this.props;
    const newBook = book;
    newBook.id = Math.floor(Math.random() * 101);
    createBook(newBook);
    const books = JSON.parse(localStorage.getItem('books'));
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    this.setState({ book: { title: '', category: '' } });
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    const { book } = this.state;
    const { title, category } = book;

    return (
      <div className="form-main-container">
        <div className="form-header flex-center">
          <h1>ADD NEW BOOK</h1>
        </div>
        <form className="d-flex" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Book title"
            required
            onChange={this.handleChange}
            className="book-input flex-unit"
          />
          <select name="category" value={category} className="category" required onChange={this.handleChange}>
            <option value="">Category</option>
            {categories.map((categ) => (
              <option value={categ} key={categ}>
                {categ}
              </option>
            ))}
          </select>
          <button type="submit" className="add-book">Add a Book</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

BooksForm.defaultProps = {
  createBook: () => {},
};

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(BooksForm);
