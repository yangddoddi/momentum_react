import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  font-size: ${(props) => props.theme.fontSize.clock};
  height: ${(props) => props.theme.etc.clockHeight};
`;

function Clock() {
  const dispatch = useDispatch();

  const date = new Date();
  const time = { hour: date.getHours(), minute: date.getMinutes() };
  const clockState = useSelector((state) => state.clockReducer);
  // const RenewClockHandler = () => {
  //   dispatch({ type: "RENEW", payload: { time } });
  // };
  // useEffect(() => {
  //   const clock = setInterval(RenewClockHandler, 1000);
  //   return () => {
  //     clearInterval(clock);
  //   };
  // });

  return (
    <ClockContainer>
      {String(time.hour).padStart(2, "0")}:
      {String(time.minute).padStart(2, "0")}
    </ClockContainer>
  );
}

export default Clock;
