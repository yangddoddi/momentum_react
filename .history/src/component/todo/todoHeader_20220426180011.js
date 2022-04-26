import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TodoHeaderContainer = styled.div`
  position: relative;
`;

const ListDropbox = styled.ul`
  position: absolute;
  background-color: rgba(51, 51, 51);
  text-align: start;
  width: 150px;
  transform: translate(0px, 40px);
  font-size: ${(props) => props.theme.fontSize.xsmall};
  border-radius: 3%;
  padding: 0px;
  z-index: 1000;

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
