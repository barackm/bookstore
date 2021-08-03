import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onChangeFilter, filter }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <select
      name="filter"
      value={filter}
      id="filter"
      required
      onChange={onChangeFilter}
    >
      {categories.map((categ) => (
        <option value={categ} key={categ}>
          {categ}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.defaultProps = {
  onChangeFilter: () => {},
  filter: '',
};

CategoryFilter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default CategoryFilter;
