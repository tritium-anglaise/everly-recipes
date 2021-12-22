import React, { useContext, useState } from 'react';

import PropTypes from 'prop-types';

import { RecipesContext } from './recipes-context';
import { fetchSearchResults } from '../utilities/API';

const SearchInput = ({ inputRef }) => {
  const { setFilterBy, searchResults, setSearchResults } = useContext(RecipesContext);
  const [search, setSearch] = useState('');

  const clearSearch = () => {
    setFilterBy('');
    setSearch('');
    setSearchResults(null);
  }

  const setSearchFilter = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value && !searchResults) {
      fetchSearchResults(value.charAt(0)).then((recipes) => {
        // cribbed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        const sorted = recipes.meals.sort((a, b) => {
          const nameA = a.strMeal.toUpperCase(); // ignore upper and lowercase
          const nameB = b.strMeal.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });

        setSearchResults(sorted);
      });
    } else if (!value) {
      clearSearch();
    } else {
      setFilterBy(value.toLowerCase());
    }
  }

  return (
    <>
      <input
        className="search__input"
        onChange={setSearchFilter}
        placeholder="I'm craving..."
        ref={inputRef}
        type="text"
        value={search}
      />
      <i
        className="search__input--clear far fa-times-circle"
        onClick={clearSearch}
        style={{display: search ? 'block' : 'none'}}
      />
    </>
  );
}

SearchInput.propTypes = {
  inputRef: PropTypes.object.isRequired
};

export default SearchInput;
