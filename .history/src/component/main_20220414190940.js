import React from "react";
import { USER__ID__KEY } from "./loginpage";

function MainPage() {
  const userID = localStorage.getItem(USER__ID__KEY);
  return (
    <div className="mainItems">
      <div className="mainItems__watch"> 00:00 </div>
      <p className="mainItems__greeting"> Hello, {userID} </p>
    </div>
  );
}

export default MainPage;
