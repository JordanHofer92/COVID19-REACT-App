import React from "react";

const API = async () => {
  async function getUsers() {
    const response = await fetch("https://corona.lmao.ninja/all");

    const data = await response.json();
  }

  return data;
  <div>getUsers().then(users => console.log(users));</div>;
};

export default API;
