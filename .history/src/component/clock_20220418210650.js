import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

const Clock = styled.div`
  font-size: ${(props) => props.theme.fontSize.clock};
  height: ${(props) => props.theme.etc.clockHeight};
`;

function Clock() {
  const date = new Date();
  const time = { hour: date.getHours(), minute: date.getMinutes() };
  const clockState = useSelector((state) => state.clockReducer);
  const RenewClockHandler = () => {
    props.dispatch({ type: "RENEW", payload: { time } });
  };
  useEffect(() => {
    const clock = setInterval(RenewClockHandler, 1000);
    return () => {
      clearInterval(clock);
    };
  });

  return (
    <ClockContainer>
      {String(clockState.hour).padStart(2, "0")}:
      {String(clockState.minute).padStart(2, "0")}
    </ClockContainer>
  );
}

export default Clock;
