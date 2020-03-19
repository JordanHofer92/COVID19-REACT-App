import React from "react";

const CheckList = () => {
  return (
    <div className="currentPage">
      <input type="checkbox" value="1" /> Make a plan of action
      <input type="checkbox" value="2" />
      Communicate with the people included in your plan
      <input type="checkbox" value="3" />
      Get to know your neighbours
      <input type="checkbox" value="4" /> Create an emergency contact list
      <input type="checkbox" value="5" />
      Practice everyday preventative actions
      <input type="checkbox" value="6" />
      Choose a room in your home that can be used for isolation
      <input type="checkbox" value="7" />
      Don't panic buy, purchase small amounts of
      non-perishable foods during your regular grocery trips
      <input type="checkbox" value="8" />
      Practice Social distancing
      <input type="checkbox" value="9" />
      Stay home if you feel sick
      <input type="checkbox" value="10" />
      Stay in touch with others through phone or email
      <h2> Articles on Readiness:</h2>
      <ul>
        <li>
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fabout%2Fprevention.html">
            CDC COVID-19 Preparation and Prevention
          </a>
        </li>
        <li>
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov">
            WHO Coronavirus Database
          </a>
        </li>
        <li>
          <a href="http://www.cidrap.umn.edu/infectious-disease-topics/covid-19">
            CIDRAP COVID-19 Publication Index
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CheckList;
