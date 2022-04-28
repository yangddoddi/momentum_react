import React from "react";
import styled from "styled-components";
import {
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";

import EmailForm from "./email.js";

const ContactContainer = styled.div`
  text-align: center;
  padding-top: ${(props) => props.theme.space.large};

  &::before {
    content: "";
    position: absolute;
    top: 60px;
    left: -5px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 120px;
    left: -5px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const ContactItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: rgba(255, 255, 255);
    border: none;
  }

  span: nth-child(2) {
    &:hover {
      transform: scale(1.2) translate(0px, 0px) !important;
      transition: 300ms ease-in;
    }
  }

  span {
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: 300ms ease-in;
    }
  }
`;

function Contact() {
  return (
    <ContactContainer>
      Contact me? <br />
      <br />
      <br />
      <ContactItems>
        <a href="https://7357.tistory.com/" target="_blank">
          <span>blog</span>
        </a>
        <MailOutlined />
        <a href="https://github.com/yangddoddi" target="_blank">
          <GithubOutlined />
        </a>
        <a href="https://www.instagram.com/y.didi2/" target="_blank">
          <InstagramOutlined />
        </a>
      </ContactItems>
      <EmailForm />
    </ContactContainer>
  );
}

export default Contact;
