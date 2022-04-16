import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../css/login.css";

const Container = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  p {
    font-size: 52px;
    font-weight: bold;
    color: black;
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
  const loginState = useSelector((state) => state.loginInputReducer);
  const dispatch = useDispatch();
  console.log(randomBackgroundImg);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("../main");
    }
  }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Login loginState={loginState} dispatch={dispatch} />
    </Container>
  );
}

function Login(props) {
  const navigate = useNavigate();

  const loginInputHandler = (e) => {
    console.log(e.target.value);
    props.dispatch({ type: "TYPING", payload: e.target.value });
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("userId", props.loginState);
    navigate("./main");
  };

  return (
    <div>
      <form onSubmit={loginSubmitHandler}>
        <p>Hello, What is your name?</p>
        <input onChange={loginInputHandler} />
      </form>
    </div>
  );
}

export default LoginPage;
