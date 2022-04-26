import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function TodoInput(props) {
  const [input, setInput] = useState("");
  const test = useSelector((state) => state.todoReducer);

  const todoInput = useRef(null);
  const dispatch = useDispatch();

  const todoInputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const [savedTodo, setSavedTodo] = useState([]);

  const todoSubmitHandler = (e) => {
    const newTodo = { id: uuidv4(), text: input, done: false };
    e.preventDefault();

    if (!input) {
      return false;
    }

    setSavedTodo([...savedTodo, newTodo]);
    localStorage.setItem("TODO", JSON.stringify(savedTodo));

    dispatch({
      type: "CREATE_TODO",
      payload: newTodo,
    });

    setInput("");
    todoInput.current.value = "";
    console.log(test);
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
