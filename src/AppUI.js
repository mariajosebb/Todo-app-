import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateButton";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { EmptyTodos } from "./components/EmptyTodos";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";
import { TodoContext } from "./components/TodoContext";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

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

      <CreateTodoButton />

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
