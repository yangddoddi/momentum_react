import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Clock = styled.div`
  font-size: ${(props) => props.theme.fontSize.clock};
  height: ${(props) => props.theme.etc.clockHeight};
`;

function Clock() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userID = localStorage.getItem("userId");
  const hoverState = useSelector((state) => state.quoteReducer);

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("../");
    }
  });

  return (
    <ClockContainer>
      {String(clockState.hour).padStart(2, "0")}:
      {String(clockState.minute).padStart(2, "0")}
    </ClockContainer>
  );
}

export default Clock;
