import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  const handleSuccess = (location) => {
    const { latitude, longitude } = location.coords;

    setLocation({ latitude, longitude });
  };

  const handleError = () => {
    setError("Local navigation failed.");
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
  });
};
