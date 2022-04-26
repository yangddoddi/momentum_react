import React from "react";
import { Checkbox } from "antd";
import styled from "styled-components";

const TodoItemStyle = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.small};
  margin-bottom: ${(props) => props.theme.space.xxsmall};

  p {
    margin: 0px;
    margin-left: ${(props) => props.theme.space.xxsmall};
    font-weight: 400;
  }
`;

function TodoItem(props) {
  return (
    <TodoItemStyle>
      {props.done ? <Checkbox cheked /> : <Checkbox />}
      <p>빵야빵야</p>
    </TodoItemStyle>
  );
}

export default TodoItem;
