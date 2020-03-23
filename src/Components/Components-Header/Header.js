import React from "react";
import ComponentsTop from "../Components-Top/ComponentsTop.js";
function Header(props) {
  return (
    <div className="header">
      <ComponentsTop logoColor={props.logoColor}/>
      <h1>Reaction COVID-19</h1>
    </div>
  );
}

export default Header;
