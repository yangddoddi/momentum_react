import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const loginInputHandler = (e) => {
    setId(e.target.value);
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    props.dispatch({ type: "LOGIN_ID", payload: id });
    navigate("../main");
  };

  return (
    <div>
      <form onSubmit={loginSubmitHandler}>
        <p>Hello, What is your name?</p>
        <input onChange={loginInputHandler} />
      </form>
    </div>
  );
}

export default Login;
