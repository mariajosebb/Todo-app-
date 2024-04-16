import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateButton";
import React from "react";

// const defaultTodos = [
//   {text: "Aprender maquetacion", completed: true},
//   {text: "Tomar el curso de Introduccion a React.js", completed: false},
//   {text: "Tomar agua", completed: true},
//   {text: "Llorar con la Llorona", completed: false},
//   {text: "Usar estados derivados", completed: true},
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));



function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const serachedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };



  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}      
      />

      <TodoList>
      {serachedTodos.map(todo => (
        <TodoItem
         key={todo.text}
         text={todo.text}
         completed={todo.completed}
         onComplete={(() => completeTodo(todo.text))}
         onDelete={(() => deleteTodo(todo.text))}
          />
        ))}
      
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
