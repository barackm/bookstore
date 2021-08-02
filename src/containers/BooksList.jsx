import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        <Book book={{ id: 1, title: 'First world war', category: 'History' }} />
      </table>
    );
  }
}

export default connect()(BooksList);
