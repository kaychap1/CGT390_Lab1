
import React, { useState } from 'react';
import './Search.css';

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
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={inputValue}
        onChange={handleInputChange}
        className="Searchinput"
      />
      <button onClick={handleSearch} className="Enter">
        Enter
      </button>
      <button onClick={handleReset} className="Reset">
        Reset
      </button>
    </div>
  );
};

export default Search;
