
import React, { useState } from 'react';
import styles from './Search.module.css';

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  const handleReset = () => {
    setInputValue('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className='searchBar'>
      <input
        type="text"
        placeholder="Search by name..."
        value={inputValue}
        onChange={handleInputChange}
        className={styles.Searchinput}
      />
      <button onClick={handleSearch} className={styles.Enter}>
        Enter
      </button>
      <button onClick={handleReset} className={styles.Reset}>
        Reset
      </button>
    </div>
  );
};

export default Search;
