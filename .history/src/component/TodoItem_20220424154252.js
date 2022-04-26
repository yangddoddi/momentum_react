import React from "react";
import { Checkbox } from "antd";
import styled from "styled-components";

const TodoItemStyle = styled.div`
  ul {
    margin-top: ${(props) => props.theme.size.base};
    margin-bottom: ${(props) => props.theme.size.small};
    padding: 0px;
    overflow: scroll;
    height: 100%;
  }

  li {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.small};
    margin-bottom: ${(props) => props.theme.space.xxsmall};

    p {
      margin: 0px;
      margin-left: ${(props) => props.theme.space.xxsmall};
      font-weight: 400;
    }
  }
`;

function TodoItem(props) {
  return (
    <li>
      {props.done ? <Checkbox cheked /> : <Checkbox />}
      <p>빵야빵야</p>
    </li>
  );
}

export default TodoItem;
