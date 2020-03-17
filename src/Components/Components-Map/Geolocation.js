import React from "react";

const Geolocation = () => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  return (
    <div>
      <Geolocation />
    </div>
  );
};

export default Geolocation;
