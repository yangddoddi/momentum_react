import React from "react";
import styled from "styled-components";

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

function TodoListContainer({ children }) {
  return <TodoListContainer>{children}</TodoListContainer>;
}

export default TodoListContainer;
