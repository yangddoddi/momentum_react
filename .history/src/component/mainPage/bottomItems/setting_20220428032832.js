import React, { useState } from "react";
import styled from "styled-components";
import {
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";

const SettingContainer = styled.div`
  position: absolute;
  bottom: ${(props) => props.theme.size.xlarge};
  left: -0.5rem;
  display: flex;
  width: 300px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 3%;
  padding-top: ${(props) => props.theme.space.xxlarge};
  font-size: 14px;
  text-align: left;
  color: rgba(190, 190, 191);
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    top: 0px;
    left: 85px;
  }

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 10px 10px 0px 8px;
    border-color: rgba(0, 0, 0, 0.8) transparent;
    bottom: -10px;
    left: 10px;
    width: 10px;
    height: 10px;
  }
`;

const SettingList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 33%;
  list-style: none;
  padding: 0px;

  li {
    padding-left: ${(props) => props.theme.space.large};
    padding-right: ${(props) => props.theme.space.base};
    margin-top: ${(props) => props.theme.space.small};
    cursor: pointer;

    &: hover {
      color: rgba(255, 255, 255);
      transition: 300ms ease-in;
    }
  }
`;

const SettingContent = styled.div`
  position: relative;
  width: 66%;
  color: rgba(255, 255, 255);
`;

const Contact = styled.div`
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

  span {
    border: 1px solid rgba(255, 255, 255);
  }
`;

function Setting() {
  const [clicked, setClicked] = useState("About");

  const onClickAbout = () => {
    setClicked("About");
  };

  const onClickContact = () => {
    setClicked("Contact");
  };

  return (
    <SettingContainer>
      <SettingList>
        <li
          onClick={onClickAbout}
          style={
            clicked == "About"
              ? { color: "rgba(255, 255, 255)" }
              : { color: "rgba(190, 190, 191)" }
          }
        >
          About
        </li>
        <li
          onClick={onClickContact}
          style={
            clicked == "Contact"
              ? { color: "rgba(255, 255, 255)" }
              : { color: "rgba(190, 190, 191)" }
          }
        >
          Contact
        </li>
      </SettingList>
      <SettingContent>
        {/* Thank you for coming!
        <br />
        This is my first React project */}
        <Contact>
          Contact me? <br />
          <br />
          <br />
          <ContactItems>
            <span>blog</span>
            <MailOutlined />
            <GithubOutlined />
            <InstagramOutlined />
          </ContactItems>
        </Contact>
      </SettingContent>
    </SettingContainer>
  );
}

export default Setting;
