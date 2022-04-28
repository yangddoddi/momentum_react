import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

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
    right: 0px;
    top: 0px;
    background-color: transparent;
  }

  input {
    font-size: 14px !important;
    text-align: left;
    color: rgba(0, 0, 0);
  }

  textarea {
    display: block;
    width: 100%;
    height: 150px;
  }
`;

export const Email = () => {
  const form = useRef();

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
          console.log(error.text);
        }
      );
  };

  return (
    <EmailForm ref={form} onSubmit={sendEmail}>
      <button> X </button>
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
