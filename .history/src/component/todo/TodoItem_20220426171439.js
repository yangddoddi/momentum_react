import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const TodoItemStyle = styled.li`
  display: flex;
  align-items: start;
  justify-content: space-between;

  font-size: ${(props) => props.theme.fontSize.small};
  text-align: center;

  p {
    margin: 0px;
    margin-left: ${(props) => props.theme.space.xxsmall};
    font-weight: 400;

    &:hover {
      transform: translate(0px, 0px);
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

  return (
    <TodoItemStyle>
      <div>
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
      </div>
      <DeleteOutlined />
    </TodoItemStyle>
  );
}

export default TodoItem;
