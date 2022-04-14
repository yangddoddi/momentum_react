import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const loginState = useSelector((state) => state);

  return <Login />;
}

function Login() {
  return (
    <div className="loginPage">
      <form className="loginPage__form">
        <p>Hello, What is your name?</p>
        <input className="loginPage__inpout" />
      </form>
    </div>
  );
}

export default LoginPage;
