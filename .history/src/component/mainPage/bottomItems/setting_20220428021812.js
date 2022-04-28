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
    position: absolute;
    bottom: 10px;
    left: 0px;
    width: 10px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.8);
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
