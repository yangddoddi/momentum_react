import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const USER__ID__KEY = "userId";

function LoginPage() {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(USER__ID__KEY)) {
      dispatch({ type: "LOGIN" });
      navigate("./main");
    }
  });

  return <Login loginState={loginState} dispatch={dispatch} />;
}

function Login(props) {
  const navigate = useNavigate();
  const loginSubmitHandler = function (e) {
    const loginInput = document.querySelector(".loginPage__input");
    e.preventDefault();
    localStorage.setItem("userId", loginInput.value);
    props.dispatch({ type: "LOGIN" });
    navigate("./main");
  };

  return (
    <div className="loginPage">
      <form className="loginPage__form" onSubmit={loginSubmitHandler}>
        <p>Hello, What is your name?</p>
        <input className="loginPage__input" />
      </form>
    </div>
  );
}

export { LoginPage, USER__ID__KEY };
