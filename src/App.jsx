import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState([""]);
  const [inCompleteTodos, setInCompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["aaaa", "bbbb"]);
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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p>完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
