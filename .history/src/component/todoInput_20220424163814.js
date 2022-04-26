import React, {useState} from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function TodoInput(props) {
    
    const [input,SetInput] = useState('');
    
  const todoInput = useRef(null);
  const dispatch = useDispatch();

  const todoInputHandler = (e) => {
  };

  const todoSubmitHandler = () => {
    dispatch( { type : 'CREATE', payload : {
        id : Date.now();
        text : 
    }})
    todoInput.current.value = "";
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
