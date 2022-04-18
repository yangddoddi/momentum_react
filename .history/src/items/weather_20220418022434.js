import { useDispatch } from "react-redux";

const dispatch = useDispatch();

const findUser = () => {
  const success = function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    dispatch({ type: "SUCESS", payload: { lat: { lat }, lon: { lon } } });
  };

  const error = () => {
    dispatch({ type: "ERROR" });
  };

  if (!navigator.geolocation) {
    dispatch({ type: "ERROR" });
  }

  navigator.geolocation.getCurrentPosition(success, error);
};
