import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: ${(props) => props.theme.fontSize.title};

  p {
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
  font-size: ${(props) => props.theme.fontSize.clock};
`;

const Focus = styled.div`
  position: absolute;
  margin-top: ${(props) => props.theme.space.xxlarge};
  font-size: ${(props) => props.theme.fontSize.subtitle};
  left: 50%;
  transform: translateX(-50%);
`;

function MainPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clockState = useSelector((state) => {
    state.clockReducer;
  });

  const userID = localStorage.getItem("userId");

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("../");
    }
  });

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainItems userId={userID} />
    </Container>
  );
}

function MainItems(props) {
  const date = new Date();

  const RenewClockHandler = () => {};

  setTimeout(RenewClockHandler, 1000);

  return (
    <section>
      <Clock> 00:00 </Clock>
      <p> Hello, {userID} </p>
      <Focus>
        <p>What is your main focus for today?</p>
        <input />
      </Focus>
    </section>
  );
}

export default MainPage;
