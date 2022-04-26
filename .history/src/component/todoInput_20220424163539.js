import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function TodoInput(props) {
  const todoInput = useRef(null);

  const todoInputHandler = (e) => {
    dispat;
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
