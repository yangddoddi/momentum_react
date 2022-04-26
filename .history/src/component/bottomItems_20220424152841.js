import React, { useRef, useState } from "react";
import TodoListContainer from "./template.js";
import TodoItem from "./TodoItem.js";
import Quote from "./qutoes.js";
import SizeContext from "antd/lib/config-provider/SizeContext";
import styled from "styled-components";

const Todo = styled.div`
  z-index: 100;
  span {
    cursor: pointer;
  }
`;

const BottomContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSize.base};

  span:nth-child(2) {
    &:hover {
      transform: translate(50px, 100px);
    }
  }
`;

function BottomItems() {
  const todoInput = useRef(null);

  const [todoId, setTodoId] = [];
  const [todoDate, setTodoDate] = [];
  const [todo, setTodo] = [];

  const [newTodo, setNewTodo] = useState("");
  const onClickTodoHandler = () => {
    console.log("투두 스위치하게 만드셈");
  };

  const todoInputHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const todoSubmitHandler = () => {
    todoInput.current.value = "";
    // createTodoItem();
  };

  // 인풋에 입력한다
  // 보내면 인풋은 비우고
  // ul의 자식 태그로 html 생성하고 dataset-date에 today, dataset-id는 index로 지정
  // localStorage에 id, date, todo 각각 저장

  return (
    <BottomContainer>
      <SettingBtn />
      <Quote />
      <Todo>
        <TodoListContainer>
          <div>
            <div>
              <span>Inbox</span>
              <span>...</span>
            </div>
            <span>...</span>
          </div>
          <ul>
            <TodoItem />
          </ul>
          <form onSubmit={todoSubmitHandler}>
            <input
              placeholder={"Enter a new Todo here"}
              onChange={todoInputHandler}
              ref={todoInput}
            />
          </form>
        </TodoListContainer>
        <span onClick={onClickTodoHandler}>TODO</span>
      </Todo>
    </BottomContainer>
  );
}

export default BottomItems;
