import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchQuery); 
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a location"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
