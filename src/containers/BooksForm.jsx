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
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    const { book } = this.state;
    const newbook = { ...book };
    newbook[name] = value;
    this.setState({ book: newbook });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { book } = this.state;
    const { createBook } = this.props;
    const newBook = book;
    newBook.id = Math.floor(Math.random() * 101);
    createBook(newBook);
    this.setState({ book: { title: '', category: '' } });
  };

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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="title"
          required
          onChange={this.handleChange}
        />
        <select name="category" value={category} id="category" required onChange={this.handleChange}>
          {categories.map((categ) => (
            <option value={categ} key={categ}>
              {categ}
            </option>
          ))}
        </select>
        <button type="submit">Add a Book</button>
      </form>
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
