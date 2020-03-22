import React from 'react'

const WatchList = (props) => {
    let country, cases, deaths;

    props.allInfo[0].forEach(element => { 
			country = element.country;
			cases = element.cases;
			deaths = element.deaths;
        })
        


    return (
        <div className="currentPage">
            <ol>
                <li>{country}</li>
                <li>{country}</li>
                <li>{country}</li>
                <li>{country}</li>
                <li>{country}</li>
                <li>{country}</li>
                <li>{country}</li>
                <li>{country}</li>
                <li>{country}</li>
                <li>{country}</li>
            </ol>
        </div>
    )
}

export default WatchList
