import React from "react";

function TodoInput() {
  const todoInput = useRef(null);

  const todoInputHandler = (e) => {
    setNewTodo(e.target.value);
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
