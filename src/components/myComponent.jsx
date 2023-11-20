import React from 'react';
import './style.css';

const MyComponent = ({ isDarkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default MyComponent;
