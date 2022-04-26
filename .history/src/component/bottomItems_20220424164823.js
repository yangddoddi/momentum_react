import React, { useRef, useState } from "react";
import TodoListContainer from "./template.js";
import TodoItem from "./TodoItem.js";
import Quote from "./qutoes.js";
import SizeContext from "antd/lib/config-provider/SizeContext";
import styled from "styled-components";
import { SettingOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import { useSelector } from "react-redux";

import TodoInput from "./todoInput.js";
import TodoHeader from "./todoHeader.js";

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

const SettingBtn = styled(SettingOutlined)`
  z-index: 100;
  cursor: pointer;
  svg {
    &:hover {
      transform: rotate(90deg);
      transition: 500ms ease-in;
    }
  }
`;

const TodoItemsList = styled.ul`
  margin-top: ${(props) => props.theme.size.base};
  margin-bottom: ${(props) => props.theme.size.small};
  padding: 0px;
  overflow: scroll;
  height: 100%;
`;

function BottomItems() {
  const [todoId, setTodoId] = [];
  const [todoDate, setTodoDate] = [];
  const [todo, setTodo] = [];

  const [newTodo, setNewTodo] = useState("");
  const onClickTodoHandler = () => {
    console.log("투두 스위치하게 만드셈");
  };

  const todoState = useSelector((state) => state.todoReducer);

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
          <TodoHeader />
          <TodoItemsList>
            {todoState.map(() => {
              return (
                <TodoItem
                  id={todoState.id}
                  text={state.text}
                  done={state.done}
                />
              );
            })}
          </TodoItemsList>
          <TodoInput setNewTodo={setNewTodo} />
        </TodoListContainer>
        <span onClick={onClickTodoHandler}>TODO</span>
      </Todo>
    </BottomContainer>
  );
}

export default BottomItems;
