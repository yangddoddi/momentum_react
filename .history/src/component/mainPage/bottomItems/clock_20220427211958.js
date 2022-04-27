import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  font-size: ${(props) => props.theme.fontSize.clock};
  height: ${(props) => props.theme.etc.clockHeight};
`;

function Clock() {
  const date = new Date();
  const currentTime = { hour: date.getHours(), minute: date.getMinutes() };
  const [time, setTime] = useState(
    `${String(currentTime.hour).padStart(2, "0")}:${String(
      currentTime.minute
    ).padStart(2, "0")}`
  );

  const RenewClockHandler = () => {
    const date = new Date();
    const currentTime = { hour: date.getHours(), minute: date.getMinutes() };
    setTime(
      `${String(currentTime.hour).padStart(2, "0")}:${String(
        currentTime.minute
      ).padStart(2, "0")}`
    );
  };

  useEffect(() => {
    const clock = setInterval(RenewClockHandler, 1000);
    return () => {
      clearInterval(clock);
    };
  });

  return <ClockContainer>{time}</ClockContainer>;
}

export default Clock;
