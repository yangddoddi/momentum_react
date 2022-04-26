import React from "react";
import { Checkbox } from "antd";
import styled from "styled-components";

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
    font-color: ${(props) => (props.done ? "0,0,0,0.5" : "0,0,0,')};
  }
`;

function TodoItem(props) {
  return (
    <TodoItemStyle>
      {props.done ? <Checkbox checked /> : <Checkbox />}
      <p done> {props.text} </p>
    </TodoItemStyle>
  );
}

export default TodoItem;
