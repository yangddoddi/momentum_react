import React from "react";
import styled from "styled-components";

const SettingContainer = styled.div`
  position: absolute;
  display: flex;
`;

const SettingList = styled.ul`
  display: flex;
`;

function Setting() {
  return (
    <SettingContainer>
      <SettingList></SettingList>
    </SettingContainer>
  );
}
