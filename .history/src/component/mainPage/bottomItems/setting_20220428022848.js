import React from "react";
import styled from "styled-components";

const SettingContainer = styled.div`
  position: absolute;
  bottom: ${(props) => props.theme.size.xlarge};
  left: -0.5rem;
  display: flex;
  width: 300px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 3%;
  padding-top: ${(props) => props.theme.space.xxlarge};
  font-size: 14px;
  text-align: left;

  &::before {
    content: "";
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
    padding-left: ${(props) => props.theme.space.xxlarge};
    padding-right: ${(props) => props.theme.space.base};
  }
`;

const SettingContent = styled.div`
  width: 66%;
`;

function Setting() {
  return (
    <SettingContainer>
      <SettingList>
        <li>About</li>
        <li>Contact</li>
        <li>ss</li>
      </SettingList>
      <SettingContent>ss ss</SettingContent>
    </SettingContainer>
  );
}

export default Setting;
