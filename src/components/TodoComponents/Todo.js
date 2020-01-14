import React from "react";

const Todo = props => {
  return (
    <div
      className={`thing${props.thing.completed ? "completed" : ""}`}
      onClick={() => props.toggleThing(props.thing.id)}
    >
      <p>{props.thing.name}</p>
    </div>
  );
};

export default Todo;
