import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const TodoItemStyle = styled.li`
  display: flex;
  align-items: start;

  font-size: ${(props) => props.theme.fontSize.small};
  text-align: center;

  p {
    margin: 0px;
    margin-left: ${(props) => props.theme.space.xxsmall};
    font-weight: 400;
  }

  svg {
    position: absolute;
    right: ${(props) => props.theme.space.large};

    &: hover {
      transform: scale(1.2);
      color: red;
      transition: 300ms ease-in;
    }
  }
`;

function TodoItem(props) {
  const todoCheckBox = useRef(null);
  const dispatch = useDispatch();

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

  const deleteHandler = () => {
    dispatch({
      type: "DELETE",
      payload: {
        id: props.id,
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
      <p
        style={
          props.done
            ? {
                textDecoration: "line-through",
                color: "rgba(255,255,255,0.3)",
              }
            : { textDecoration: "none", color: "rgb(255,255,255)" }
        }
      >
        {props.text}
      </p>
      <DeleteOutlined onClick={deleteHandler} />
    </TodoItemStyle>
  );
}

export default TodoItem;
