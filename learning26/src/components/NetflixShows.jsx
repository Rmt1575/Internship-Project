import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{color:"whitesmoke"}}>
        <h1 style={{textAlign:"center" , color : "red"}}>Netflix Shows</h1>
        <ul>
            <li>
                <Link to={"/watch/moneyheist"}>MONEY HEIST</Link>
            </li>
            <li>
                <Link to={"/watch/squidgame"}>SQUID GAME</Link>
            </li>
            <li>
                <Link to={"/watch/gameofthrons"}>GAME OF THRONS</Link>
            </li>
            <li>
                <Link to={"/watch/strangerthings"}>STRANGER THINGS</Link>
            </li>
            <li>
                <Link to={"/watch/loki"}>LOKI</Link>
            </li>
        </ul>     
    </div>
  )
}
