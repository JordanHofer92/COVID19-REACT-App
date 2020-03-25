import React from "react";

// Sudo code for zoom to clicked country:
  //preserveAspectRatio = defer? <align> <meetOrSlice>?
  // 1. find the viewbox for each country
  // 2. handle click, change viewbox to that country
        // a. useState,
        // b. write a function,  when clickedCountry, setViewBox =...

const Geolocator = props => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    props.userLocation = "Geolocation is not supported by this browser.";
  }

  function showPosition(position) {
    props.userLocation =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        props.userLocation = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        props.userLocation = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        props.userLocation = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        props.userLocation = "An unknown error occurred.";
        break;
    }
  }

  return <div></div>;
};

export default Geolocator;
