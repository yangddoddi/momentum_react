import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useHref, useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  SettingOutlined,
  EllipsisOutlined,
  EditOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Checkbox } from "antd";

import "antd/dist/antd.css";

import styled from "styled-components";
import Quote from "./qutoes.js";
import Weather from "./weather.js";
import Clock from "./clock.js";
import SizeContext from "antd/lib/config-provider/SizeContext";

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

  span:nth-child(2) {
    &:hover {
      transform: translate(50px, 100px);
    }
  }
`;

const Searchbar = styled.form`
  position: relative;

  span {
    position: absolute;
    top: 15px;
  }

  input {
    font-size: ${(props) => props.theme.fontSize.base};
    position: absolute;
    padding-left: ${(props) => props.theme.space.xxxlarge};
    top: 10px;
    width: 250px;
    text-align: start;
    font-weight: 400;
    border-bottom: none;
    opacity: 0.2;
    transition: 100ms;

    &:hover {
      border-bottom: 1px solid white;
    }

    &:focus {
      opacity: 1;
      border-bottom: 1px solid white;
    }
  }
`;

const SettingBtn = styled(SettingOutlined)`
  z-index: 100;
  cursor: pointer;
  svg {
    &:hover {
      transform: rotate(90deg);
      transition: 500ms ease-in;
    }
  }
`;

const FocusBefore = styled(motion.form)``;

const FocusAfter = styled(motion.div)`
  position: relative;
  display: inline-block;

  span {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: 800;
  }
`;

const FocusLeft = styled(Checkbox)`
  position: absolute;
  left: -40px;
  bottom: 25px;
`;

const FocusRight = styled.div`
  position: absolute;
  right: -40px;
  bottom: 15px;

  span {
    width: 25px;
    height: 25px;
    line-height: 30px;

    &:hover {
      background-color: rgba(255,255,255,0.5);
      border-radius: 50%;
    }
  }
  }
`;

const LineThrough = styled.p`
  text-decoration: Line-through;
  opacity: 0.5;
`;

const CommendMessage = styled.p`
  position: absolute;
  font-size: ${(props) => props.theme.fontSize.base};
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  transition: 300ms ease-in;
`;

const DropBox = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  width: 150px;

  right: -147px;
  bottom: -75px;

  &: after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 7px 8px;
    border-color: rgba(0, 0, 0, 0.5) transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -8px;
    left: 24px;
  }

  ul {
    margin: 0px;
    padding: 0px;
  }

  li {
    list-style: none;
    font-size: ${(props) => props.theme.fontSize.xsmall};
    padding: ${(props) => props.theme.space.small};
    cursor: pointer;

    &: hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  span {
    font-size: ${(props) => props.theme.fontSize.xsmall};
  }
`;

const Todo = styled.div`
  z-index: 100;
  span {
    cursor: pointer;
  }
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  text-align: center;
  width: 300px;
  max-height: 500px;
  border-radius: 10px;
  padding: ${(props) => props.theme.space.xlarge};
  bottom: 45px;
  right: 0px;
  overflow: auto;

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    z-index: 200;
    border-style: solid;
    border-color: #000000 transparent;
    border-width: 13px 13px 0;
    bottom: -13px;
    left: 90%;
    margin-left: -13px;
  }

  div {
    position: fixed;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${(props) => props.theme.space.xsmall};
  }

  ul {
    margin-top: ${(props) => props.theme.size.base};
    margin-bottom: ${(props) => props.theme.size.small};
    padding: 0px;
    overflow: scroll;
    height: 100%;
  }

  li {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.small};
    margin-bottom: ${(props) => props.theme.space.xxsmall};

    p {
      margin: 0px;
      margin-left: ${(props) => props.theme.space.xxsmall};
      font-weight: 400;
    }
  }

  form {
    position: fixed;
    bottom: 70px;
    height: 20px;

    input {
      text-align: start;
      font-size: ${(props) => props.theme.fontSize.small};
      border: none;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 400;
    }
  }
`;

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID = localStorage.getItem("userId");

  const hoverState = useSelector((state) => state.quoteReducer);

  const [dropBox, setDropBox] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("../");
    }
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

function MainItems(props) {
  const [focus, setFocus] = useState(false);
  const [commend, setCommend] = useState(false);
  const [focusAfter, setFocusAfter] = useState(false);
  const [focusInput, setFocusInput] = useState("");
  const [saveInputValue, setSaveInputValue] = useState("");

  const onMouseOverHandler = () => {
    setFocus(true);
  };
  const onMouseLeaveHanlder = () => {
    setFocus(false);
  };
  const onCheckHandler = (e) => {
    localStorage.setItem("checked", e.target.checked);
    if (e.target.checked) {
      setCommend(true);
    } else {
      setCommend(false);
    }
  };
  const endCommendHandler = () => {
    setCommend(false);
  };
  const openDropBox = () => {
    props.setDropBox(true);
  };
  const clearHandler = () => {
    setFocusAfter(false);
    localStorage.setItem("checked", false);
    localStorage.setItem("focus", "");
  };
  const editHandler = () => {
    setSaveInputValue(localStorage.getItem("focus"));
    setFocusAfter(false);
    localStorage.setItem("checked", false);
  };
  const submitFocus = () => {
    localStorage.setItem("focus", focusInput);
    setFocusAfter(true);
    setSaveInputValue(false);
  };
  const onChangeFocusInput = (e) => {
    setFocusInput(e.target.value);
  };

  useEffect(() => {
    if (commend) {
      setTimeout(endCommendHandler, 2000);
    }
  }, [commend]);

  useEffect(() => {
    if (localStorage.getItem("focus")) {
      setFocusAfter(true);
    }
  }, []);

  let isChecked = JSON.parse(localStorage.getItem("checked"));
  let inputVal = localStorage.getItem("focus");

  return (
    <section>
      <Clock />
      <p> Hello, {props.userId} </p>
      <Focus
        onMouseOver={onMouseOverHandler}
        onMouseLeave={onMouseLeaveHanlder}
      >
        {!focusAfter ? (
          <FocusBefore
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={submitFocus}
          >
            <p>What is your main focus for today?</p>
            <input
              onChange={onChangeFocusInput}
              defaultValue={saveInputValue ? inputVal : null}
            />
          </FocusBefore>
        ) : (
          <FocusAfter
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <>
              <span>TODAY</span>
              {!isChecked ? (
                <p>{localStorage.getItem("focus")}</p>
              ) : (
                <LineThrough>{localStorage.getItem("focus")}</LineThrough>
              )}
              {!focus ? null : (
                <>
                  <FocusLeft onChange={onCheckHandler} checked={isChecked} />
                  <FocusRight>
                    <EllipsisOutlined onClick={openDropBox} />
                  </FocusRight>
                </>
              )}
              {props.dropBox ? (
                <DropBox>
                  <ul>
                    <li onClick={editHandler}>
                      <EditOutlined /> Edit
                    </li>
                    <li onClick={clearHandler}>
                      <CloseOutlined /> Clear
                    </li>
                  </ul>
                </DropBox>
              ) : null}
            </>
            <CommendMessage style={commend ? { opacity: 0.8 } : { opacity: 0 }}>
              Great work !
            </CommendMessage>
          </FocusAfter>
        )}
      </Focus>
    </section>
  );
}

function TopItems() {
  const [searchInput, setSearchInput] = useState("");

  const searchSubmitHandler = () => {
    window.open(`https://www.google.com/search?q=${searchInput}`, "_blank");
  };
  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <TopContainer>
      <Searchbar onSubmit={searchSubmitHandler}>
        <SearchOutlined />
        <input onChange={inputChangeHandler}></input>
      </Searchbar>
      <Weather />
    </TopContainer>
  );
}

function BottomItems() {
  const onClickTodoHandler = () => {
    console.log("aa");
  };

  return (
    <BottomContainer>
      <SettingBtn />
      <Quote />
      <Todo>
        <TodoListContainer>
          <div>
            <div>
              <span>Inbox</span>
              <span>...</span>
            </div>
            <span>...</span>
          </div>
          <ul>
            <li>
              <Checkbox />
              <p>빵야빵야</p>
            </li>
          </ul>
          <form>
            <input placeHolder={"Enter a new ToDo here"} />
          </form>
        </TodoListContainer>
        <span onClick={onClickTodoHandler}>TODO</span>
      </Todo>
    </BottomContainer>
  );
}

export default MainPage;
