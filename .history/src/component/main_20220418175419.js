import React, { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useCurrentLocation from "../items/useCurrentPosition.js";
import positionOptions from "../items/useCurrentOption.js";
import axios from "axios";

import styled from "styled-components";
import randomQuote from "../items/qutoes.js";

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
      <div>top items</div>
      <Weather />
    </TopContainer>
  );
}

function BottomItems(props) {
  return (
    <BottomContainer>
      <div>설정</div>
      <QuoteContainer>
        <p>{randomQuote.quoteENG}</p>
        <p>
          {randomQuote.quoteKR} {randomQuote.author}
        </p>
      </QuoteContainer>
      <div>투두</div>
    </BottomContainer>
  );
}

function Weather() {
  const { location, error } = useCurrentLocation(positionOptions);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");

  useEffect(() => {
    if (error) {
      return console.log("error");
    }
    if (location) {
      const axios = require("axios");
      const weather_KEY = "d3149a5e176fa3a047d393e01906bd6d";
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${weather_KEY}`
        )
        .then((response) => {
          console.log(response);
          setCity(response.name);
          setWeather(response.weather[0].main);
          setTemp(((response.main.temp - 32) * 5) / 9);
        });
    }
  }, [location]);
  return <div>ss</div>;
}

export default MainPage;
