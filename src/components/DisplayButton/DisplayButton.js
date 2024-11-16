import React, { useState } from 'react';
import './DisplayButton.css';

const DisplayButton = ({ onGroupingChange, onOrderingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="display-button-container">
      <button 
        className="display-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Display</span>
        <span className="icon">▼</span>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select onChange={(e) => onOrderingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayButton;