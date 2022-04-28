import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const EmailForm = styled.form`
  position: absolute;
  top: 50%
  left: 50%;
  trasform: translate(-50%,-50%);
  width: 200px;
  height: 200px;
`;

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_mail",
        "template_9mkbttp",
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
      <label>Name</label>
      <input type="text" name="user_name" placeholder="이름을 입력해주세요." />
      <label>Phone</label>
      <input type="tel" name="user_name" placeholder="연락처를 입력해주세요." />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="메일 주소를 입력해주세요"
      />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </EmailForm>
  );
};
