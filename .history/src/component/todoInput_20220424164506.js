import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function TodoInput(props) {
  const [input, setInput] = useState("");

  const todoInput = useRef(null);
  const dispatch = useDispatch();

  const todoInputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const todoSubmitHandler = () => {
    dispatch({
      type: "CREATE",
      payload: {
        id: Date.now(),
        text: input,
        done: false,
      },
    });
    setInput("");
    todoInput.current.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <input
        placeholder={"Enter a new Todo here"}
        onChange={todoInputHandler}
      />
    </form>
  );
}

export default TodoInput;
