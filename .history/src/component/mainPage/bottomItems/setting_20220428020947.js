import React from "react";
import styled from "styled-components";

const SettingContainer = styled.div`
  position: absolute;
  display: flex;
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
