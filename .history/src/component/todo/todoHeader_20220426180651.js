import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TodoHeaderContainer = styled.div`
  position: relative;
  z-index: 100;
`;

const ListDropbox = styled.ul`
  position: absolute;
  background-color: rgba(51, 51, 51);
  text-align: start;
  width: 150px;
  transform: translate(0px, 35px);
  font-size: ${(props) => props.theme.fontSize.xsmall};
  border-radius: 3%;
  padding: 0px;
  color: rgba(190, 190, 191);

  &: after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 7px 8px;
    border-color: rgba(51, 51, 51) transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -8px;
    left: 24px;
  }

  li {
    padding: ${(props) => props.theme.space.xsmall};
    list-style: none;
    cursor: pointer;

    &: hover {
      background-color: rgba(71, 71, 71);
    }
  }
`;

function TodoHeader() {
  const [list, setList] = useState("TODO ▾");
  const todo = useSelector((store) => store.todoReducer);

  return (
    <TodoHeaderContainer>
      <div>
        <span>{list}</span>
      </div>
      <ListDropbox>
        <li>TODO {todo.length}</li>
        <li>DONE</li>
      </ListDropbox>
    </TodoHeaderContainer>
  );
}

export default TodoHeader;
