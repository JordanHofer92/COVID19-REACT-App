import React from "react";

function ComponentsTop(props) {
    let myStyle = {
      color: props.logoColor,
    }

  return (
    <i style={myStyle} className="fas fa-biohazard fa-3x"></i>
  );
}

export default ComponentsTop;