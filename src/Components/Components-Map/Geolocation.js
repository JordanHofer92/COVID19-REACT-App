import React, { useEffect, useState } from "react";
const Geolocation = () => {
  const [Location, setLocation] = useState(0);
  let mounted = true;
  useEffect(() => {
    // getCurrentPosition needs a callback function
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    return () => {
      mounted = false;
    };
  }, []);
  const handleGeolocation = event => {
    if (mounted) {
      // set location here
      // latitude: event.coords.latitude,
      // longitude: event.coords.longitude,
      // speed: event.coords.speed
    }
  };
  return <div>latitude: {Location}</div>;
};
export default Geolocation;
