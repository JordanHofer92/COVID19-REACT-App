import React from "react";
import ComponentsTop from "../Components-Top/ComponentsTop.js";
function ComponentPage1(props) {
  const { colour = "white" } = props;
  return (
    <div className="header">
      <ComponentsTop />
      <h1 style={{ color: colour }}>Reaction COVID-19</h1>
    </div>
  );
}

export default ComponentPage1;
