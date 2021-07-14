import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodo } from "./components/InCompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState([""]);
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") {
      return null;
    } else {
      const newTodos = [...inCompleteTodos, todoText];
      setInCompleteTodos(newTodos);
      setTodoText("");
    }
  };
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newInCompleteTodos = [...inCompleteTodos];
    // alert(newInCompleteTodos);
    newInCompleteTodos.splice(index, 1);
    // alert(newInCompleteTodos);

    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newInCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newInComplteTodos = [...inCompleteTodos, completeTodos[index]];
    setInCompleteTodos(newInComplteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompleteTodo
        inCompleteTodos={inCompleteTodos}
        onClick={onClickComplete}
        onClick2={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClick={onClickBack} />
    </>
  );
};
