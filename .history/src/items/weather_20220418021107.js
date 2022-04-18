import { useDispatch } from "react-redux";

const dispatch = useDispatch();

const sucess = function (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
};

const failed = () => {
  dispatch({ type: "FAILED" });
};

if (!navigator.geolocation) {
  console.log("임시 (지원안함)");
} else {
  console.log("로딩중 (임시)");
}

navigator.geolocation.getCurrentPosition(sucess, failed);
