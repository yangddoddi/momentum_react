import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";

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

function MainItems(props) {
  const [focus, setFocus] = useState(false);
  const [commend, setCommend] = useState(false);
  const [focusAfter, setFocusAfter] = useState(false);
  const [focusInput, setFocusInput] = useState("");
  const [saveInputValue, setSaveInputValue] = useState("");

  const loginState = useSelector((state) => state.loginInputReducer);

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
      <p> Hello, {loginState} </p>
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