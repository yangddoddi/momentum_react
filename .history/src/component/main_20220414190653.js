import React from "react";
import { USER__ID__KEY } from "./loginpage";

function MainPage() {
  const userID = localStorage.getItem(USER__ID__KEY);
  return <div> 메인입니다 </div>;
}

export default MainPage;
