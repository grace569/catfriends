import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className='pa3 ba b--gold bg-near-white'
        type='search'
        onChange={ searchChange }
        placeholder='search cats'/>
    </div>
  );
}

export default SearchBox;
