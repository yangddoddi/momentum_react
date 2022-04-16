import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

import "../css/randomImage.css";

const Container = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  p {
    font-size: 52px;
    font-weight: bold;
    color: white;
  }

  input {
    font-size: 52px;
    font-weight: bold;
    width: 100%;
    border: none;
    border-bottom: 2px white solid;
    outline: none;
    text-align: center;
    background-color: transparent;
  }
`;

function LoginPage() {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch({ type: "LOGIN" });
      navigate("../main");
    }
  }, []);

  return (
    <Container
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Login loginState={loginState} dispatch={dispatch} />
    </Container>
  );
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
    <div>
      <form className="loginPage__form" onSubmit={loginSubmitHandler}>
        <p>Hello, What is your name?</p>
        <input className="loginPage__input" />
      </form>
    </div>
  );
}

export default LoginPage;
