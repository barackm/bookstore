import React, { Component } from 'react';
import Book from '../components/Book';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table>
        <tr>
          <th>BookID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        <Book />
      </table>
    );
  }
}

export default BooksList;
