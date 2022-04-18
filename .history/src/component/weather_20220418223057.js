import axios from "axios";
import { useState, useEffect, React } from "react";
import useCurrentLocation from "../items/useCurrentPosition.js";
import positionOptions from "../items/useCurrentOption.js";
import { Spin } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const CostumSpin = styled(Spin)`
  color: white;
`;

const WeatherDiv = styled.div`
  user-select: none;

  img {
    width: 40px;
  }

  span {
    font-size ${(props) => props.theme.fontSize.large}
  }

  p {
    font-size: ${(props) => props.theme.fontSize.xsmall};
    font-weight: 300;
  }
`;

function Weather() {
  const { location, error } = useCurrentLocation(positionOptions);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  console.log(location);

  useEffect(() => {
    if (error) {
      return console.log("error");
    }
    if (location) {
      const axios = require("axios");
      const weather_KEY = "d3149a5e176fa3a047d393e01906bd6d";
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${weather_KEY}&units=metric`
        )
        .then((response) => {
          console.log(response);
          setCity(response.data.name);
          setWeather(response.data.weather[0].icon);
          setTemp(`${response.data.main.temp}°C`);
        })
        .catch(() => {
          alert("Local navigation failed.");
        });
    }
  }, [location]);
  return (
    <div>
      {!city == false ? (
        <WeatherDiv>
          <img src={`http://openweathermap.org/img/wn/${weather}.png`}></img>
          <span>{temp}</span>
          <p>{city}</p>
        </WeatherDiv>
      ) : (
        <CostumSpin tip={"Finding your location.."} />
      )}
    </div>
  );
}

export default Weather;
