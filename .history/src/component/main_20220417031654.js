import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    font-weight: bold;
    margin-bottom: ${(props) => props.theme.space.base};
  }

  input {
    font-size: ${(props) => props.theme.fontSize.title};
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
    <motion.div
      className="mainPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainItems userId={userID} />
    </motion.div>
  );
}

function MainItems() {
  return (
    <section className="mainItems">
      <div className="mainItems__watch"> 00:00 </div>
      <p className="mainItems__greeting"> Hello, {userID} </p>
      <div className="mainItems__toDoFocus">
        <p className="mainItems__toDoFocus__question">
          What is your main focus for today?
        </p>
        <input className="mainItems__toDoFocus__input" />
      </div>
    </section>
  );
}

export default MainPage;
