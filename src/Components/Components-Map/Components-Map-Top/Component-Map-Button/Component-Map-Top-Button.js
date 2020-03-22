import React from 'react'
import "./Component-Map-Top-Button.css"

const Button = (props) => {
    function zoomOut() {
        props.increaseViewBoxWidth()
        props.increaseViewBoxHeight()
    }

    function zoomIn() {
        props.decreaseViewBoxWidth()
        props.decreaseViewBoxHeight()
    }

    return (
        <div className = "component-map-button">
            <button className="zoomButton" onClick={zoomIn}>+</button>
            <button className="zoomButton" onClick={zoomOut}>-</button>
        </div>
    )
}

export default Button