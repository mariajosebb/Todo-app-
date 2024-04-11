import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateButton";
import React from "react";

const defaultTodos = [
  {text: "Aprender maquetacion", completed: true},
  {text: "Tomar el curso de Introduccion a React.js", completed: false},
  {text: "Tomar agua", completed: true},
  {text: "Llorar con la Llorona", completed: false},
  {text: "Usar estados derivados", completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log("Los usuarios buscan de" + searchValue);
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}      
      />

      <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem
         key={todo.text}
         text={todo.text}
         completed={todo.completed}/>
        ))}
      
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
