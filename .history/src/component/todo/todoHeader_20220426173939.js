import React from "react";
import { useState } from "react";

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
