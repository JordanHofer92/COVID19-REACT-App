import React from "react";

const API = () => {
  async function getUsers() {
    const response = await fetch("https://corona.lmao.ninja/all");

    const data = await response.json();

    return data;
  }

  getUsers().then(users => console.log(users));

  return <div></div>;
};

export default API;
