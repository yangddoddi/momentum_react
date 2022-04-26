import React from "react";
import { useState } from "react";
import styled from "styled-components";
const ListDropbox = st;

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
