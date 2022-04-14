import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const loginState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  return (
    <>
      {!loginState ? (
        <Login loginState={loginState} dispatch={dispatch} />
      ) : (
        <Greeting />
      )}
    </>
  );
}

function Login(props) {
  const loginSubmitHandler = function (e) {
    const loginInput = document.querySelector(".loginPage__input");
    e.preventDefault();
    console.log(loginInput);
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
  setTimeout(shiftPageHandler, 3000);

  return <div>hi</div>;
}

export default LoginPage;
