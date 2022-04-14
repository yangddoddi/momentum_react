import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const loginState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  return <Login setLoginState={loginState} dispatch={dispatch} />;
}

function Login(props) {
  const loginInput = document.querySelector(".loginPage__input");
  const loginSubmitHandler = function (e) {
    e.preventDefault();
    console.log(loginInput.value);
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

export default LoginPage;
