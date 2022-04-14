import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch({ type: "LOGIN" });
    }
  });

  return (
    <>
      {!loginState ? (
        <Login loginState={loginState} dispatch={dispatch} />
      ) : (
        navigate("/main")
      )}
    </>
  );
}

function Login(props) {
  const loginSubmitHandler = function (e) {
    const loginInput = document.querySelector(".loginPage__input");
    e.preventDefault();
    localStorage.setItem("userId", loginInput.value);
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

export default LoginPage;
