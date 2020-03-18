import React from 'react'
import "./Components-Map-Text.css"

const Text = (props) => {
    // console.log(props.allInfo[0])
    return (
        <section className="components-map-text">
            <h1>COVID-19 Global Cases Update</h1>
            <span>Country: </span>
            <span>Cases: </span>
            <span>Today Cases: </span>
            <span>Death: </span>
            <span>Today Death: </span>
            <span>Recovered: </span>
            <span>Critical: </span>
        </section>
    )
}

export default Text
