import "../css/main.css";
import React from "react";

function MainPage() {
  const userID = localStorage.getItem("userId");
  return (
    <div className="mainPage">
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
    </div>
  );
}

export default MainPage;
