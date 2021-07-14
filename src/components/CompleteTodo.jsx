import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClick } = props;
  return (
    <>
      <div className="complete-area">
        <p>完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClick(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
