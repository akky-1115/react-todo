import React from "react";

export const InCompleteTodo = (props) => {
  console.log(props);

  const { inCompleteTodos, onClick, onClick2 } = props;
  return (
    <>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClick(index)}>完了</button>
                <button onClick={() => onClick2(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
