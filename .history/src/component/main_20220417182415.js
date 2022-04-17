import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import randomQuote from "../qutoes";

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
`;

const Focus = styled.div`
  position: absolute;
  margin-top: ${(props) => props.theme.space.xxlarge};
  font-size: ${(props) => props.theme.fontSize.subtitle};
  left: 50%;
  transform: translateX(-50%);
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSize.base};
`;

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clockState = useSelector((state) => state.clockReducer);

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
      <TopItems />
      <MainItems userId={userID} dispatch={dispatch} clockState={clockState} />
      <BottomItems />
    </Container>
  );
}

function MainItems(props) {
  const date = new Date();
  const time = { hour: date.getDate(), minute: date.getMinutes() };
  const RenewClockHandler = () => {
    props.dispatch({ type: "RENEW", payload: { time } });
  };
  setTimeout(RenewClockHandler, 1000);

  return (
    <section>
      <Clock>
        {props.clockState.hour}:{props.clockState.minute}
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
  return <div>top items</div>;
}

function BottomItems(props) {
  return (
    <BottomContainer>
      <div>설정</div>
      <p>{randomQuote.quoteENG}</p>
      <div>투두</div>
    </BottomContainer>
  );
}

export default MainPage;
