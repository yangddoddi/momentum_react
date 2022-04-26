import React from "react";
import { useState } from "react";
import styled from "styled-components";
const ListDropbox = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  width: 150px;

  right: -147px;
  bottom: -75px;

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
    <div>
      <div>
        <span>{list}</span>
      </div>
    </div>
  );
}

export default TodoHeader;
