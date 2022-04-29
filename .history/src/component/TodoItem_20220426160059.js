import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const TodoItemStyle = styled.li`
  display: flex;
  align-items: center;

  font-size: ${(props) => props.theme.fontSize.small};
  margin-bottom: ${(props) => props.theme.space.xxsmall};
`;

const Text = styled.p`
  margin: 0rem;
  align-items: center;
  margin-left: ${(props) => props.theme.space.xxsmall};
  font-weight: 400;
`;

function TodoItem(props) {
  const todoCheckBox = useRef(null);

  useEffect(() => {
    console.log(todoCheckBox.current.input.checked);
    if (props.done) {
      todoCheckBox.current.input.checked = true;
    }
  }, []);

  const dispatch = useDispatch();
  const savedTodo = localStorage.getItem("TODO");

  const onChangeHandler = () => {
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
    <TodoItemStyle>
      <Checkbox
        onChange={onChangeHandler}
        ref={todoCheckBox}
        defaultChecked={props.done}
      />
      <Text
        style={
          props.done
            ? { textDecoration: "line-through", color: "rgba(255,255,255,0.3)" }
            : { textDecoration: "none", color: "rgb(255,255,255)" }
        }
      >
        {props.text}
      </Text>
    </TodoItemStyle>
  );
}

export default TodoItem;