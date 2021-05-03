import React from "react";

function Search({ setSearchTerm, searchTerm }) {
  function handleInputChange(e) {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleInputChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
