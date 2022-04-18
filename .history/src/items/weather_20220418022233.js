import { useDispatch } from "react-redux";

const dispatch = useDispatch();

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
} else {
  console.log("로딩중 (임시)");
}

navigator.geolocation.getCurrentPosition(success, error);
