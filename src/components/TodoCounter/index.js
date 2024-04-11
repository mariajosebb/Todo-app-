import "./TodoCounter.css";
function TodoCounter({total, completed}) {
    return (
      <h1>
        Has Completado <br /><span className="container--ToDo">{completed}</span> de <span className="container--ToDo">{total}</span> TODO's
      </h1>
    );
  }

  export { TodoCounter};