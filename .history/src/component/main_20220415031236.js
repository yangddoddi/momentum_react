import "../css/main.css";
import React from "react";
import { motion } from "framer-motion";

function MainPage() {
  const userID = localStorage.getItem("userId");
  return (
    <div.motion
      className="mainPage"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </div.motion>
  );
}

export default MainPage;
