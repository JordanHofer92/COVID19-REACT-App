import React from 'react'
import './NavBar.css'
import MapButton from './MapButton/MapButton.js'
import ChartButton from './ChartButton/ChartButton.js'
import CheckListButton from './CheckListButton/CheckListButton.js'
import LocalNewsButton from './LocalNewsButton/LocalNewsButton.js'
import WatchListButton from './WatchListButton/WatchListButton.js'


const NavBar = () => {
    return (
        <div className="NavButtons">
            <MapButton/>
            <ChartButton/>
            <CheckListButton/>
            <LocalNewsButton/>
            <WatchListButton/>
        </div>
    )
}

export default NavBar
