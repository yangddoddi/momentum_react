import React, { useState } from "react";
import { Checkbox } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";

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
  }
`;

function TodoItem(props) {
  const dispatch = useDispatch();
  const savedTodo = localStorage.getItem("TODO");

  const onChangeHandler = (e) => {
    if (e.target.checked) {
      e.target.checked = !e.target.checked;
    }

    dispatch({
      type: "CHECK",
      payload: {
        id: props.id,
        text: props.text,
        done: props.done,
      },
    });
  };

  return (
    {savedTodo && (
    <TodoItemStyle>
      <Checkbox onChange={onChangeHandler} />
      <p
        style={
          props.done
            ? { textDecoration: "line-through", color: "rgba(255,255,255,0.3)" }
            : { textDecoration: "none", color: "rgb(255,255,255)" }
        }
      >
        {props.text}
      </p>
    </TodoItemStyle>
  )}
}

export default TodoItem;
