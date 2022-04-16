import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  color: white;

  p {
    font-size: ${(props) => props.theme.fontSize.subtitle};
    font-weight: bold;
    margin-bottom: ${(props) => props.theme.space.base};
  }

  input {
    font-size: ${(props) => props.theme.fontSize.subtitle};
    font-weight: bold;
    width: 100%;
    border: none;
    border-bottom: 2px white solid;
    outline: none;
    text-align: center;
    background-color: transparent;
    color: white;
  }
`;

const Clock = styled.div`
  font-size: ${(props) => props.theme.fontSize.subtitle};
`;

const userID = localStorage.getItem("userId");

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("../");
    }
  });

  return (
    <Container
      className="mainPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainItems userId={userID} />
    </Container>
  );
}

function MainItems() {
  return (
    <section>
      <Clock> 00:00 </Clock>
      <p> Hello, {userID} </p>
      <div>
        <p>What is your main focus for today?</p>
        <input />
      </div>
    </section>
  );
}

export default MainPage;
