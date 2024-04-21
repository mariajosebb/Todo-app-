import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";
function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h1>
      Has Completado <br />
      <span className="container--ToDo">{completedTodos}</span> de{" "}
      <span className="container--ToDo">{totalTodos}</span> TODO's
    </h1>
  );
}

export { TodoCounter };
