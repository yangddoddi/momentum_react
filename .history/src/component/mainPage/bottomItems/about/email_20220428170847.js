import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const EmailForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255);
  width: 400px;
  height: 400px;
  font-size: 16px;
  color: black;
  text-align: left;
  padding: ${(props) => props.theme.space.xxlarge};
  border-radius: 3%;

  button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  input {
    font-size: 14px !important;
    color: rgba(0, 0, 0);
  }

  input: nth-child(10) {
    cursor: pointer;
    width: 50px;
    border: solid 1px rgba(0, 0, 0, 0.8);
    color: rgba(0, 0, 0);
  }

  textarea {
    display: block;
    width: 100%;
    height: 130px;
    resize: none;
  }
`;

export const Email = () => {
  const form = useRef();
  const dispatch = useDispatch();

  const closeEmail = () => {
    dispatch({ type: "CLOSE_EMAIL" });
  };

  //   const templateParams = {
  //     name: "Yangeunchan",
  //   };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dod8uki",
        "template_yyhbbe6",
        form.current,
        "bjNm3gg2xTIHYuEKQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert("전송을 실패했습니다.");
        }
      );
  };

  return (
    <EmailForm ref={form} onSubmit={sendEmail}>
      <button onClick={closeEmail}> X </button>
      <label>Name</label>
      <input type="text" name="from_name" placeholder="이름을 입력해주세요." />
      <label>Phone</label>
      <input type="tel" name="phone" placeholder="연락처를 입력해주세요." />
      <label>Email</label>
      <input type="email" name="email" placeholder="메일 주소를 입력해주세요" />
      <label>Message</label>
      <textarea name="text" />
      <input type="submit" value="Send" />
    </EmailForm>
  );
};
