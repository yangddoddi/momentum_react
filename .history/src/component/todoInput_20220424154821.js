import React from "react";
import { useRef } from "react";

function TodoInput(props) {
  const todoInput = useRef(null);

  const todoInputHandler = (e) => {
    props.setNewTodo(e.target.value);
  };

  const todoSubmitHandler = () => {
    todoInput.current.value = "";
    // createTodoItem();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <input
        placeholder={"Enter a new Todo here"}
        onChange={todoInputHandler}
        ref={todoInput}
      />
    </form>
  );
}

export default TodoInput;
