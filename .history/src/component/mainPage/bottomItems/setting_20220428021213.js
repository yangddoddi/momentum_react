import React from "react";
import styled from "styled-components";

const SettingContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.8);
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
