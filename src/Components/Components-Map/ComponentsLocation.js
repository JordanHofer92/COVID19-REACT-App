import React from "react";

function ComponentsLocation() {
  if (!navigator.geolocation) {
    return <div> Unable to get your location</div>;
  }
  return <div> {console.log(navigator.geolocation.getCurrentPosition)}</div>;
}

export default ComponentsLocation;
