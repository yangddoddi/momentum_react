import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const loginState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {loginState === true ? (
        <Login loginState={loginState} dispatch={dispatch} />
      ) : (
        <Greeting />
      )}
    </div>
  );
}

function Login(props) {
  const loginInput = document.querySelector(".loginPage__input");
  const loginSubmitHandler = function (e) {
    e.preventDefault();
    localStorage.setItem("userId", loginInput.value);
    props.dispatch({ type: "LOGIN" });
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

function Greeting(props) {
  return <div>hi</div>;
}

export default LoginPage;
