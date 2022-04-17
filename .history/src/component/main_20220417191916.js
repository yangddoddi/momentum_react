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
  overflow: hidden;

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

const TopContainer = styled.div`
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
  transition: 300ms ease-in;

  p {
    margin-bottom: ${(props) => props.theme.space.xsmall};

    &:nth-child(2) {
      font-size: ${(props) => props.theme.fontSize.xsmall};
      opacity: 0.8;
    }
  }

  &:hover {
    transform: translate(-50%, -30px);
  }
`;

// const subQuote = styled.p`
//   font-size: ${(props) => props.theme.fontSize.small};
// `;

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clockState = useSelector((state) => state.clockReducer);
  const hoverState = useSelector((state) => state.quoteReducer);

  const userID = localStorage.getItem("userId");
  const RenewClockHandler = () => {
    props.dispatch({ type: "RENEW", payload: { time } });
  };

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("../");
    }

    clock = setInterval(RenewClockHandler, 1000);
    return () => {
      clearInterval(clock);
    };
  });

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TopItems />
      <MainItems userId={userID} dispatch={dispatch} clockState={clockState} />
      <BottomItems hoverState={hoverState} dispatch={dispatch} />
    </Container>
  );
}

function MainItems(props) {
  // const date = new Date();
  // const time = { hour: date.getDate(), minute: date.getMinutes() };
  // const RenewClockHandler = () => {
  //   props.dispatch({ type: "RENEW", payload: { time } });
  // };
  // setTimeout(RenewClockHandler, 1000);

  return (
    <section>
      <Clock>
        {String(props.clockState.hour).padStart(2, "0")}:
        {String(props.clockState.minute).padStart(2, "0")}
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
      <div>top items</div>
    </TopContainer>
  );
}

function BottomItems(props) {
  return (
    <BottomContainer>
      <div>설정</div>
      <QuoteContainer
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <p>{randomQuote.quoteENG}</p>
        <p>
          {randomQuote.quoteKR} {randomQuote.author}
        </p>
      </QuoteContainer>
      <div>투두</div>
    </BottomContainer>
  );
}

export default MainPage;
