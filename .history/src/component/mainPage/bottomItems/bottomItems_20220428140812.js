import React, { useState } from "react";
import TodoListContainer from "./todo/template.js";
import TodoItem from "./todo/TodoItem.js";
import Quote from "./qutoes.js";
import styled from "styled-components";
import { SettingOutlined } from "@ant-design/icons";
import "antd/dist/antd.less";

import { useSelector } from "react-redux";

import TodoInput from "./todo/todoInput.js";
import TodoHeader from "./todo/todoHeader.js";
import Setting from "./about/setting.js";

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
  const [todo, setTodo] = useState(false);
  const [settingBox, setSettingBox] = useState(false);

  const onClickTodoHandler = () => {
    todo ? setTodo(false) : setTodo(true);
  };

  const showSetting = () => {
    console.log("1");
    setSettingBox(!settingBox);
  };

  const todoState = useSelector((state) => state.todoReducer);
  // 인풋에 입력한다
  // 보내면 인풋은 비우고
  // ul의 자식 태그로 html 생성하고 dataset-date에 today, dataset-id는 index로 지정
  // localStorage에 id, date, todo 각각 저장

  console.log(todoState);

  return (
    <BottomContainer>
      <SettingBtn onClick={showSetting} />
      {settingBox && <Setting />}
      <Quote />
      <Todo>
        {todo && (
          <TodoListContainer>
            <TodoHeader />
            <TodoItemsList>
              {todoState.map((todo) => {
                return (
                  <TodoItem
                    id={todo.id}
                    key={todo.id}
                    text={todo.text}
                    done={todo.done}
                    visible={todo.visible}
                  />
                );
              })}
            </TodoItemsList>
            <TodoInput />
          </TodoListContainer>
        )}
        <span onClick={onClickTodoHandler}>TODO</span>
      </Todo>
    </BottomContainer>
  );
}

export default BottomItems;
