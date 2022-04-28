import React from "react";
import styled from "styled-components";

const SettingContainer = styled.div`
  position: absolute;
  bottom: ${(props) => props.theme.size.large};
  left: 0px;
  display: flex;
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.8);

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 100px; 10px 7px 8px;
    border-color: rgba(0, 0, 0, 0.8) transparent;
    bottom: 0px;
    left: 0px;
    width: 10px;
    height: 10px;
  }
`;

const SettingList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 33%;
`;

const SettingContent = styled.div`
  width: 66%;
`;

function Setting() {
  return (
    <SettingContainer>
      <SettingList></SettingList>
      <SettingContent></SettingContent>
    </SettingContainer>
  );
}

export default Setting;
