import "./TodoSearch.css"
import React from "react";
function TodoSearch({
  searchValue,
  setSearchValue,
}) {
    return (
      <input 
      className="container--search"
      placeholder="Agrega tu nuevo ToDo"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}/>
    );
  }

  export { TodoSearch };