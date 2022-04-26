import React from "react";
import { Checkbox } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { withTheme } from "styled-components";
import { withError } from "antd/lib/modal/confirm";

const TodoItemStyle = styled.li`
  display: flex;
  align-items: center;

  font-size: ${(props) => props.theme.fontSize.small};
  margin-bottom: ${(props) => props.theme.space.xxsmall};

  p {
    margin: 0px;
    margin-left: ${(props) => props.theme.space.xxsmall};
    font-weight: 400;
    text-align: center;
    font-decoration: ${(props) => (props.done ? "overline" : "none")};
    font-color: ${(props) => (props.done ? "0,0,0,0.5" : "0,0,0")};
  }
`;

function TodoItem(props) {
  const dispatch = useDispatch();

  const onChangeHandler = () => {
    dispatch({ type: "CHECK" });
  };

  return (
    <TodoItemStyle>
      {props.done ? (
        <Checkbox onChange={onChangeHandler} checked />
      ) : (
        <Checkbox onChange={onChangeHandler} />
      )}
      <p color={done ? "black" : "withe"}> {props.text} </p>
    </TodoItemStyle>
  );
}

export default TodoItem;
