import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
import React, { useContext } from "react";
function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      className="container--search"
      placeholder="Agrega tu nuevo ToDo"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
