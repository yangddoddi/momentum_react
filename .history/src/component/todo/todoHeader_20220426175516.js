import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TodoHeaderContainer = styled.div`
  position: relative;
`;

const ListDropbox = styled.ul`
  position: absolute;
  background-color: grey;
  text-align: start;
  width: 150px;
  transform: translate(28px, 40px);
  padding: ${(props) => props.theme.space.xsmall};
  font-size: ${(props) => props.theme.fontSize.small};

  &: after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 7px 8px;
    border-color: grey transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -8px;
    left: 24px;
  }

  li {
    list-style: none;
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
