import "../css/main.css";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const userID = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      dispatch({ type: "LOGOUT" });
      navigate("../");
    }
  });

  console.log(userID);
  return (
    <motion.div
      className="mainPage"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainItems userId={userID} />
    </motion.div>
  );
}

function MainItems(props) {
  return (
    <section className="mainItems">
      <div className="mainItems__watch"> 00:00 </div>
      <p className="mainItems__greeting"> Hello, {props.userID} </p>
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
