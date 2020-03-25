import React, {useState} from "react";
import "./CheckList.css"

const CheckList = (props) => {
  const [checkedBox, setCheckBox] = useState(false)
  const [checkedBox2, setCheckBox2] = useState(false)
  const [checkedBox3, setCheckBox3] = useState(false)
  const [checkedBox4, setCheckBox4] = useState(false)
  const [checkedBox5, setCheckBox5] = useState(false)
  const [checkedBox6, setCheckBox6] = useState(false)
  const [checkedBox7, setCheckBox7] = useState(false)
  const [checkedBox8, setCheckBox8] = useState(false)
  const [checkedBox9, setCheckBox9] = useState(false)
  const [checkedBox10, setCheckBox10] = useState(false)

  if (checkedBox && checkedBox2 && checkedBox3 && checkedBox4 && checkedBox5 && checkedBox6 && checkedBox7 && checkedBox8 && checkedBox9 && checkedBox10){
    props.youAreReady()
  }else{
    props.youArentReady()
  }

  return (
    <div className="currentPage">
        <form>
          <h1>Are You Ready for Coronavirus?</h1>
          <div id="checkList">
            <label><input type="checkbox" className="plan" value="1" onChange={()=>setCheckBox(!checkedBox)} />Make a plan of action</label><br/>
            <label><input type="checkbox" className="plan" value="2" onChange={()=>setCheckBox2(!checkedBox2)}/>Communicate your plan to those included</label><br/>
            <label><input type="checkbox" className="plan" value="3" onChange={()=>setCheckBox3(!checkedBox3)}/>Get to know your neighbours</label><br/>
            <label><input type="checkbox" className="plan" value="4" onChange={()=>setCheckBox4(!checkedBox4)} />Create an emergency contact list</label><br/>
            <label><input type="checkbox" className="plan" value="5" onChange={()=>setCheckBox5(!checkedBox5)}/>Practice everyday preventative actions</label><br/>
            <label><input type="checkbox" className="plan" vvalue="6" onChange={()=>setCheckBox6(!checkedBox6)}/>Identify a space at home for isolation</label><br/>
            <label><input type="checkbox" className="plan" value="7" onChange={()=>setCheckBox7(!checkedBox7)}/>Don't panic buy, spread out your purchases</label><br/>
            <label><input type="checkbox" className="plan" value="8" onChange={()=>setCheckBox8(!checkedBox8)}/>Practice Social distancing</label><br/>
            <label><input type="checkbox" className="plan" value="9" onChange={()=>setCheckBox9(!checkedBox9)}/>Stay home if you feel sick</label><br/>
            <label><input type="checkbox" className="plan" value="10" onChange={()=>setCheckBox10(!checkedBox10)}/>Stay in touch with others remotely</label>
          </div>
        </form>
      <div className="articles">
        <h2>Official Articles:</h2>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fabout%2Fprevention.html"
            >
              CDC COVID-19 Preparation and Prevention
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov"
            >
              WHO Coronavirus Database
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://www.cidrap.umn.edu/infectious-disease-topics/covid-19"
            >
              CIDRAP COVID-19 Publication Index
            </a>
          </li>
        </ul>
        </div>
    </div>
  );
};
export default CheckList;