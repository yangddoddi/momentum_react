import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  useSelector((state) => {
    console.log(state);
  });

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
