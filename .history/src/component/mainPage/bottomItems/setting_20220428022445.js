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
  text-align: left;
  padding: 0px;
`;

const SettingContent = styled.div`
  width: 66%;
`;

function Setting() {
  return (
    <SettingContainer>
      <SettingList>
        <li>aa</li>
        <li>ss</li>
        <li>ss</li>
      </SettingList>
      <SettingContent></SettingContent>
    </SettingContainer>
  );
}

export default Setting;
