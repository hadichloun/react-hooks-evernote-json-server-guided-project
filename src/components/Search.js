import React from "react";

function Search({ searchNote, setSearch }) {
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <div className="filter">
      <input 
        id="search-bar" 
        type="text" 
        placeholder="Search Notes"
        onChange={handleSearchChange}
        value={searchNote} />
    </div>
  );
}

export default Search;