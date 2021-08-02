import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form>
        <input type="text" placeholder="title" />
        <select name="category" id="category">
          {categories.map((categ) => (<option value={categ} key={categ}>{categ}</option>))}
        </select>
      </form>
    );
  }
}

export default BooksForm;
