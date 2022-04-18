import { useDispatch } from "react-redux";

const dispatch = useDispatch();

const sucess = function (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
};

const failed = () => {
  console.log("임시 (실패)");
};
