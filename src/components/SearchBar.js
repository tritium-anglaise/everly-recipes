import React, { useRef } from 'react';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchBar = () => {
  const searchInput = useRef(null);

  return (
    <>
      <SearchButton inputRef={searchInput} />
      <SearchInput inputRef={searchInput}/>
    </>
  );
};

export default SearchBar;
