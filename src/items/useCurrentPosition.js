import { useState, useEffect } from "react";

const useCurrentLocation = (options = {}) => {
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

    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    );
  }, [options]);

  return { location, error };
};

export default useCurrentLocation;
