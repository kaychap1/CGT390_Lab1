
import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Positions
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleSelect('All')}>All</li>
          <li onClick={() => handleSelect('Leader')}>Leader</li>
          <li onClick={() => handleSelect('Engineer')}>Engineer</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
