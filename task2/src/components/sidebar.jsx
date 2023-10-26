// Sidebar.js
import React from 'react';
import './sidebar.css';

const Sidebar = ({ categories, onFilterChange, onSortChange }) => {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">Filters</h2>
      <div className="form-group">
        <label className="sidebar-label">
          Category:
          <select className="form-control" onChange={onFilterChange}>
            <option value="">All</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <br />
      <div className="form-group">
        <label className="sidebar-label">
          Sort By:
          <select className="form-control" onChange={onSortChange}>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
