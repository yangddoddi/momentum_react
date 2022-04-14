import React from "react";
import { USER__ID__KEY } from "./loginpage";

function MainPage() {
  const userID = localStorage.getItem(USER__ID__KEY);
  return (
    <div className="mainItems">
      <p> Hello, {userID} </p>
    </div>
  );
}

export default MainPage;
