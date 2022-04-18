import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  const handleSuccess = (location) => {
    const { latitude, longitude } = location.coords;
  };
};
