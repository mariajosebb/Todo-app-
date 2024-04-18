import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateButton";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { EmptyTodos } from "./components/EmptyTodos";
import { TodoContext } from "./components/TodoContext";

function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({loading, error,searchedTodos,completeTodo, deleteTodo}) => (
            <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && !error && searchedTodos.length === 0 && <EmptyTodos />}
  
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };

// import{TodoCounter}from '../TodoCounter';
// import{TodoSearch}from '../TodoSearch';
// import{TodoList}from '../TodoList';
// import{TodoItem}from '../TodoItem';
// import{TodosLoading}from '../TodosLoading';
// import{TodosError}from '../TodosError';
// import{EmptyTodos}from '../EmptyTodos';
// import{CreateTodoButton}from '../CreateTodoButton';
// import{TodoContext}from '../TodoContext'

// ;function AppUI(){
//     return(
//     <>
//     <TodoCounter/>
//     <TodoSearch/>
//     <TodoContext.Consumer>{({loading,error,searchedTodos,completeTodo,deleteTodo,})=>(<TodoList>{loading&&(<><TodosLoading/><TodosLoading/><TodosLoading/></>)}
// {error&&<TodosError/>}
// {(!loading&&searchedTodos.length===0)&&<EmptyTodos/>}
// {searchedTodos.map(todo=>(<TodoItem
// key={todo.text}
// text={todo.text}
// completed={todo.completed}
// onComplete={()=>completeTodo(todo.text)}
// onDelete={()=>deleteTodo(todo.text)}/>))}</TodoList>)}
// </TodoContext.Consumer>
// <CreateTodoButton/>
// </>);}

// export{AppUI};
