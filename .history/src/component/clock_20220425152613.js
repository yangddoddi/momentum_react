import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  font-size: ${(props) => props.theme.fontSize.clock};
  height: ${(props) => props.theme.etc.clockHeight};
`;

function Clock() {
  const dispatch = useDispatch();

  const [time, setTime] = useState({
    hour: currentTime.hour,
    minute: currentTime.minute,
  });

  const date = new Date();
  const currentTime = { hour: date.getHours(), minute: date.getMinutes() };
  const clockState = useSelector((state) => state.clockReducer);
  const RenewClockHandler = () => {
    setTime(`${currentTime.hour}:${currentTime.minute}`);
  };
  useEffect(() => {
    const clock = setInterval(RenewClockHandler, 1000);
    return () => {
      clearInterval(clock);
    };
  });

  return (
    <ClockContainer>
      {String(time.hour).padStart(2, "0")}:
      {String(time.minute).padStart(2, "0")}
    </ClockContainer>
  );
}

export default Clock;
