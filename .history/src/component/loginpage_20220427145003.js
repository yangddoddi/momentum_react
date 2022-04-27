import React, { useEffect, useState } from "react";
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
  color: white;

  p {
    font-size: ${(props) => props.theme.fontSize.title};
    font-weight: 600;
    margin-bottom: ${(props) => props.theme.space.base};
  }

  input {
    font-size: ${(props) => props.theme.fontSize.title};
    font-weight: 600;
    width: 100%;
    border: none;
    border-bottom: 2px white solid;
    outline: none;
    text-align: center;
    background-color: transparent;
    color: white;
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Login loginState={loginState} dispatch={dispatch} />
    </Container>
  );
}

function Login(props) {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const loginInputHandler = (e) => {
    setId(e.target.value);
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    props.dispatch({ type: "LOGIN_ID", payload: id });
    // localStorage.setItem("userId", props.loginState);
    navigate("../main");
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
