import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

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
  const loginState = useSelector((state) => state.loginInputReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("../main");
    }
  }, []);

  return (
    <Container
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Login loginState={loginInputReducer} dispatch={dispatch} />
    </Container>
  );
}

function Login(props) {
  const navigate = useNavigate();

  const loginInputHanlder = (e) => {
    props.dispatch({ type: "TYPING", payload: e.value });
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    props.loginState;
    localStorage.setItem("userId", loginInput.value);
    navigate("./main");
  };

  return (
    <div>
      <form onSubmit={loginSubmitHandler}>
        <p>Hello, What is your name?</p>
        <input onChange={loginInputHanlder} />
      </form>
    </div>
  );
}

export default LoginPage;
