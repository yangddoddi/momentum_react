import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  font-size: ${(props) => props.theme.fontSize.clock};
  height: ${(props) => props.theme.etc.clockHeight};
`;

function Clock() {
  const date = new Date();
  const currentTime = { hour: date.getHours(), minute: date.getMinutes() };
  const [time, setTime] = useState(`${currentTime.hour}:${currentTime.minute}`);

  const RenewClockHandler = () => {
    setTime(`${currentTime.hour}:${currentTime.minute}`);
  };
  useEffect(() => {
    const clock = setInterval(RenewClockHandler, 1000);
  }, [time]);

  return <ClockContainer>{time}</ClockContainer>;
}

export default Clock;
