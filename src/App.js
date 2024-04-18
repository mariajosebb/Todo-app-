import React from "react";
import { TodoProvider } from "./components/TodoContext";
import { AppUI } from "./AppUI";


const defaultTodos = [
  { text: "Aprender maquetacion", completed: true },
  { text: "Tomar el curso de Introduccion a React.js", completed: false },
  { text: "Tomar agua", completed: true },
  { text: "Llorar con la Llorona", completed: false },
  { text: "Usar estados derivados", completed: true },
];


localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

function App() {
  return (
   <TodoProvider>
    <AppUI />
   </TodoProvider>
  );
}

export default App;
