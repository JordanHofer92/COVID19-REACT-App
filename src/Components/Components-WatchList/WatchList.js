import React from 'react'

const WatchList = (props) => {

    
    return (
        <div className="currentPage watchList">
            <h1>Top Affected Countries</h1>
            <ol>
                <li>{props.allInfo[0][0].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][0].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][0].deaths}</li>
                <li>{props.allInfo[0][1].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][1].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][1].deaths}</li>
                <li>{props.allInfo[0][2].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][2].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][2].deaths}</li>
                <li>{props.allInfo[0][3].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][3].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][3].deaths}</li>
                <li>{props.allInfo[0][4].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][4].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][4].deaths}</li>
                <li>{props.allInfo[0][5].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][5].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][5].deaths}</li>
                <li>{props.allInfo[0][6].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][6].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][6].deaths}</li>
                <li>{props.allInfo[0][7].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][7].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][7].deaths}</li>
                <li>{props.allInfo[0][8].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][8].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][8].deaths}</li>
                <li>{props.allInfo[0][9].country}<br></br> <span>Total Confirmed Cases: </span>{props.allInfo[0][9].cases}<br></br> <span>Total Confirmed Deaths: </span>{props.allInfo[0][9].deaths}</li>
            </ol>
        </div>
    )
}

export default WatchList
