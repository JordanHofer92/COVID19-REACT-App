import React from "react";

const CheckList = props => {
  const { handleAllChecked } = props;

  const checkIfAllChecked = () => {
    const collection = document.getElementsByClassName("checks");
    const checks = Array.from(collection);
    const checked = checks.filter(c => c.checked === true);
    if (checks.length === checked.length) {
      handleAllChecked && handleAllChecked();
    }
  };

  return (
    <div className="currentPage">
      <form>
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="1"
        />{" "}
        Make a plan of action
        <br />
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="2"
        />
        Communicate with the people included in your plan
        <br />
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="3"
        />
        Get to know your neighbours
        <br />
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="4"
        />{" "}
        Create an emergency contact list
        <br />
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="5"
        />
        Practice everyday preventative actions
        <br />
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="6"
        />
        Choose a room in your home that can be used for isolation
        <br />
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="7"
        />
        Don't panic buy, purchase small amounts of
        non-perishable foods during your regular grocery trips
        <br />
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="8"
        />
        Practice Social distancing
        <br />
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="9"
        />
        Stay home if you feel sick
        <br />
        <input
          onChange={checkIfAllChecked}
          class="checks"
          type="checkbox"
          name="plan"
          value="10"
        />
        Stay in touch with others through phone or email
        <br />
      </form>
      <h2> Articles on Readiness:</h2>
      <ul>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fabout%2Fprevention.html">
            CDC COVID-19 Preparation and Prevention
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov">
            WHO Coronavirus Database
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="http://www.cidrap.umn.edu/infectious-disease-topics/covid-19">
            CIDRAP COVID-19 Publication Index
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CheckList;