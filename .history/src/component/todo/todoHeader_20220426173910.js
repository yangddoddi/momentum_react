import React from "react";
import { useState } from "react";

function TodoHeader() {
  const [list, setList] = useState("Todo");

  return (
    <div>
      <div>
        <span>Inbox ▾</span>
      </div>
    </div>
  );
}

export default TodoHeader;
