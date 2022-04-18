import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import QuoteContainer from "../items/qutoes.js";
import Weather from "./weather.js";

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  text-align: center;
  color: white;
  font-size: ${(props) => props.theme.fontSize.title};
  overflow: hidden;
  padding: ${(props) => props.theme.space.base};

  p {
    font-weight: 600;
    margin-bottom: ${(props) => props.theme.space.base};
  }

  input {
    font-size: ${(props) => props.theme.fontSize.subtitle};
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

const Clock = styled.div`
  font-size: ${(props) => props.theme.fontSize.clock};
  height: ${(props) => props.theme.etc.clockHeight};
`;

const Focus = styled.div`
  position: absolute;
  width: ${(props) => props.theme.etc.focusWidth};
  margin-top: ${(props) => props.theme.space.xxlarge};
  font-size: ${(props) => props.theme.fontSize.subtitle};
  left: 50%;
  transform: translateX(-50%);
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSize.base};
`;

const BottomContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSize.base};
`;

const QuoteContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    p:nth-child(1) {
      transform: translate(-50%, -50%);
    }
    p:nth-child(2) {
      transform: translate(-50%, 50%);
      opacity: 0.8;
    }
  }

  p:nth-child(1) {
    margin-bottom: ${(props) => props.theme.space.xsmall};
    position: absolute;
    width: 100%;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    transition: 500ms ease-in;
  }

    p:nth-child(2) {
      position: absolute;
      width: 100%;
      top: 0px;
      left: 50%;
      transform: translateX(-50%);
      font-size: ${(props) => props.theme.fontSize.xsmall};
      opacity: 0;
      transition: 500ms ease-in;
    }
  }
`;

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID = localStorage.getItem("userId");

  const hoverState = useSelector((state) => state.quoteReducer);

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
      <TopItems />
      <MainItems userId={userID} dispatch={dispatch} />
      <BottomItems hoverState={hoverState} dispatch={dispatch} />
    </Container>
  );
}

function MainItems(props) {
  const date = new Date();
  const time = { hour: date.getHours(), minute: date.getMinutes() };

  const clockState = useSelector((state) => state.clockReducer);

  const RenewClockHandler = () => {
    props.dispatch({ type: "RENEW", payload: { time } });
  };

  useEffect(() => {
    const clock = setInterval(RenewClockHandler, 1000);
    return () => {
      clearInterval(clock);
    };
  });

  return (
    <section>
      <Clock>
        {String(clockState.hour).padStart(2, "0")}:
        {String(clockState.minute).padStart(2, "0")}
      </Clock>
      <p> Hello, {props.userId} </p>
      <Focus>
        <p>What is your main focus for today?</p>
        <input />
      </Focus>
    </section>
  );
}

function TopItems(props) {
  return (
    <TopContainer>
      <div>검색</div>
      <Weather />
    </TopContainer>
  );
}

function BottomItems(props) {
  return (
    <BottomContainer>
      <div>설정</div>
      <QuoteContainer />
      <div>투두</div>
    </BottomContainer>
  );
}

export default MainPage;
