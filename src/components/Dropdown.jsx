
import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ onSelect, options }) => {
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
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles["dropdown-toggle"]}>
        Positions
      </button>
      {isOpen && (
        <ul className={styles["dropdown-menu"]}>
          <li onClick={() => handleSelect('All')}>All</li>
          {options && options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
