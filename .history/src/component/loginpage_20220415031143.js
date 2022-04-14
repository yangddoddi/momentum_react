import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../css/login.css";

function LoginPage() {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch({ type: "LOGIN" });
      navigate("../main");
    }
  });

  return <Login loginState={loginState} dispatch={dispatch} />;
}

function Login(props) {
  const navigate = useNavigate();
  const loginSubmitHandler = function (e) {
    const loginInput = document.querySelector(".loginPage__input");
    e.preventDefault();
    localStorage.setItem("userId", loginInput.value);
    props.dispatch({ type: "LOGIN" });
    navigate("./main");
  };

  return (
    <motion.articlediv
      className="loginPage"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form className="loginPage__form" onSubmit={loginSubmitHandler}>
        <p>Hello, What is your name?</p>
        <input className="loginPage__input" />
      </form>
    </motion.articlediv>
  );
}

export default LoginPage;
