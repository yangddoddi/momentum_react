import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const loginState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  return <Login setLoginState={loginState} dispatch={dispatch} />;
}

function Login(props) {
  return (
    <div className="loginPage">
      <form
        className="loginPage__form"
        onSubmit={() => {
          Props.dispatch;
        }}
      >
        <p>Hello, What is your name?</p>
        <input className="loginPage__input" />
      </form>
    </div>
  );
}

export default LoginPage;
