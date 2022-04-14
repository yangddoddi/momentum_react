import React from "react";
import { USER__ID__KEY } from "./loginpage";

function MainPage() {
  const userID = localStorage.getItem(USER__ID__KEY);
  return (
    <section className="mainItems">
      <div className="mainItems__watch"> 00:00 </div>
      <p className="mainItems__greeting"> Hello, {userID} </p>
      <div className="mainItems__toDoFocus">
        <p className="mainItems__toDoFocus__question">
          What is your main focus for today?
        </p>
        <input className="mainItems__toDoFocus__input" />
      </div>
    </section>
  );
}

export default MainPage;
