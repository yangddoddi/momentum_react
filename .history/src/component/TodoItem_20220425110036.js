import React, { useState } from "react";
import { Checkbox } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { withTheme } from "styled-components";
import { withError } from "antd/lib/modal/confirm";
import { bindActionCreators } from "redux";

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
    <TodoItemStyle>
      <Checkbox onChange={onChangeHandler} />
      <p
        style={
          props.done
            ? { textDecoration: "line-through", color: "rgba(0,0,0,0.8)" }
            : { textDecoration: "none", color: "red" }
        }
      >
        {props.text}
      </p>
    </TodoItemStyle>
  );
}

export default TodoItem;
