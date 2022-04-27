import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Clock from "./clock.js";

import "antd/dist/antd.css";

import styled from "styled-components";
import BottomItems from "./bottomItems.js";
import TopItems from "./topItems/topItems.js";

import MainItems from "./centerItems/mainItems.js";

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
    user-select: none;
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

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.loginInputReducer);
  const userID = localStorage.getItem("userId");

  const hoverState = useSelector((state) => state.quoteReducer);

  const [dropBox, setDropBox] = useState(false);

  useEffect(() => {
    !loginState && navigate("../");
  });

  const closeDropBox = () => {
    if (!dropBox) {
      return;
    }
    setDropBox(false);
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeDropBox}
    >
      <TopItems />
      <MainItems
        userId={userID}
        dispatch={dispatch}
        dropBox={dropBox}
        setDropBox={setDropBox}
      />
      <BottomItems hoverState={hoverState} dispatch={dispatch} />
    </Container>
  );
}

export default MainPage;
