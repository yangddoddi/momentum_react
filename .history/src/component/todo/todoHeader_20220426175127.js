import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TodoHeaderContainer = styled.div`
  position: relative;
`;

const ListDropbox = styled.ul`
  position: absolute;
  background-color: rgba(0, 0, 0);
  text-align: left;
  width: 150px;
  transform: translateY(40px);
  z-index: 4;

  &: after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 7px 8px;
    border-color: rgba(0, 0, 0, 0.5) transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -8px;
    left: 24px;
  }
`;

function TodoHeader() {
  const [list, setList] = useState("TODO ▾");

  return (
    <TodoHeaderContainer>
      <div>
        <span>{list}</span>
      </div>
      <ListDropbox>
        <li>TODO</li>
        <li>DONE</li>
      </ListDropbox>
    </TodoHeaderContainer>
  );
}

export default TodoHeader;
