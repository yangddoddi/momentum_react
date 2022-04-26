import React from "react";
import Checkbox from "antd";

function TodoItem(props) {
  return (
    <li>
      {props.done ? <Checkbox cheked /> : <Checkbox />}
      <p>빵야빵야</p>
    </li>
  );
}
