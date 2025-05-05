import React from 'react';
import { FaSearch, FaSort } from 'react-icons/fa';

const SearchAndSort = ({ search, setSearch, sortOption, setSortOption }) => {
  return (
    <div className="search-container">
      <div className="relative flex-grow max-w-md">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search books by title, author, or genre..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          className="search-input pl-10"
        />
      </div>
      
      <div className="sort-container">
        <label htmlFor="sort" className="flex items-center">
          <FaSort className="mr-2" /> Sort by:
        </label>
        <select 
          id="sort" 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-select"
        >
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="rating-desc">Rating (High to Low)</option>
          <option value="rating-asc">Rating (Low to High)</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndSort;
